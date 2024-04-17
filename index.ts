import { generateMeaningfulString, generateNumber, generatePerson, generateString, generateUUID } from 'test-data-utils'


for (let i = 0; i < 4097; i++) {
	console.log(generateUUID())
}

console.log(generateMeaningfulString({
	length: 1000,
	separator: ' ',
}))

console.log(generatePerson())


console.log(generateNumber())

console.log(generateString())