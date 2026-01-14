import { faker } from '@faker-js/faker'
import { createHash } from '../utils/crypto.js'


export const generateUsers = (amount = 1) => {
const users = []


for (let i = 0; i < amount; i++) {
users.push({
_id: faker.database.mongodbObjectId(),
first_name: faker.person.firstName(),
last_name: faker.person.lastName(),
email: faker.internet.email(),
password: createHash('coder123'),
role: faker.helpers.arrayElement(['user', 'admin']),
pets: []
})
}


return users
}


export const generatePets = (amount = 1) => {
const pets = []


for (let i = 0; i < amount; i++) {
pets.push({
name: faker.animal.petName(),
specie: faker.animal.type()
})
}


return pets
}