import fs from 'fs'

import featureExtractor from './featureExtractor'
import {generateForwardIndex} from '../helpers/search'

indexSchoolData()

export function indexSchoolData () {
  const forwardIndex = generateForwardIndex(featureExtractor, [
    'name',
    'website',
    'email',
    'levelOfEducation',
    'coordinates',
    'svy21',
    'planningArea',
    'schoolType',
    'motherTongue',
    'specialMoeProgrammes',
    'specialProgrammes',
    'ccas',
    'specialNeeds',
    'studentCare',
    'uniqueCcas'
  ])

  const result = []
  Object.keys(forwardIndex).forEach(key => {
    forwardIndex[key].id = key
    result.push(forwardIndex[key])
  })

  fs.writeFileSync('public/schoolList.json', JSON.stringify(result))
  return result
}
