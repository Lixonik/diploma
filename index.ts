import { generateMeaningfulString, generateNumber, generatePerson, generateString, generateUUID } from 'test-data-utils'
import { faker } from '@faker-js/faker'
import { Benchmark } from '../data-generators-benchmark/src'


for (let i = 0; i < 4097; i++) {
	console.log(generateUUID())
}

console.log(generateMeaningfulString({
	length: 1000,
	separator: ' ',
}))

console.log(generatePerson({
	gender: 'male',
}))

console.log(faker.person.firstName('male'))

Benchmark.pushCandidate(generateUUID.bind(null, false), faker.string.uuid)
Benchmark.plotAndSaveMeasurementTimesCharts()
Benchmark.clearCandidates()

Benchmark.pushCandidate(generateNumber.bind(null, {
	min: 0,
	max: 100
}), faker.number.int.bind(null, {
	min: 0,
	max: 100
}))
Benchmark.plotAndSaveMeasurementTimesCharts()
Benchmark.clearCandidates()

Benchmark.pushCandidate(generateString.bind(null, {
	charSet: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
	length: 1000
}), faker.string.fromCharacters.bind(null, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 1000))
Benchmark.plotAndSaveMeasurementTimesCharts()
Benchmark.clearCandidates()
