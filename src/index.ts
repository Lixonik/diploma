import { generateMeaningfulString, generateNumber, generatePerson, generateString, generateUUID } from 'test-data-utils'
import { faker } from '@faker-js/faker'
import { Benchmark } from '../../data-generators-benchmark/src'


const stubNumberOpts = {
	min: 0,
	max: 100
}
const stubStringOpts = {
	charSet: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
	length: 1000
}

const stubPartNamesOpts = {
	gender: 'male',
	type: 'name',
	language: 'en'
} as const

const stubMeaningfulStringOpts = {
	length: 30,
	separator: '-',
	language: 'en'
} as const

Benchmark.pushCandidate(generateUUID.bind(null, false), faker.string.uuid)
Benchmark.saveMeasurementTimesSeries()
// Benchmark.plotAndSaveMeasurementTimesCharts()
Benchmark.printAvgGenerationTimes()
Benchmark.clearCandidates()

Benchmark.pushCandidate(generateNumber.bind(null, stubNumberOpts), faker.number.int.bind(null, stubNumberOpts))
Benchmark.saveMeasurementTimesSeries()
// Benchmark.plotAndSaveMeasurementTimesCharts()
Benchmark.printAvgGenerationTimes()
Benchmark.clearCandidates()

Benchmark.pushCandidate(generateString.bind(null, stubStringOpts), faker.string.fromCharacters.bind(null, stubStringOpts.charSet, stubStringOpts.length))
Benchmark.saveMeasurementTimesSeries()
// Benchmark.plotAndSaveMeasurementTimesCharts()
Benchmark.printAvgGenerationTimes()
Benchmark.clearCandidates()

Benchmark.pushCandidate(generatePerson.bind(null, stubPartNamesOpts), faker.person.firstName.bind(null, stubPartNamesOpts.gender))
Benchmark.saveMeasurementTimesSeries()
// Benchmark.plotAndSaveMeasurementTimesCharts()
Benchmark.printAvgGenerationTimes()
Benchmark.clearCandidates()

Benchmark.pushCandidate(generateMeaningfulString.bind(null, stubMeaningfulStringOpts), faker.lorem.slug.bind(null, stubMeaningfulStringOpts.length))
Benchmark.saveMeasurementTimesSeries()
// Benchmark.plotAndSaveMeasurementTimesCharts()
Benchmark.printAvgGenerationTimes()
Benchmark.clearCandidates()

// plotting via matplotlib
