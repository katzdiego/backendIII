import { Router } from 'express'
import { generateUsers, generatePets } from '../services/mocking.service.js'
import User from '../models/user.model.js'
import Pet from '../models/pet.model.js'

const router = Router()

router.get('/mockingpets', (req, res) => {
  const pets = generatePets(100)
  res.json({ status: 'success', payload: pets })
})

router.get('/mockingusers', (req, res) => {
  const users = generateUsers(50)
  res.json({ status: 'success', payload: users })
})

router.post('/generateData', async (req, res) => {
  const { users, pets } = req.body

  if (!users || !pets) {
    return res.status(400).json({
      status: 'error',
      message: 'Parámetros inválidos'
    })
  }

  const usersToInsert = generateUsers(users)
  const petsToInsert = generatePets(pets)

  await User.insertMany(
    usersToInsert.map(u => ({
      first_name: u.first_name,
      last_name: u.last_name,
      email: u.email,
      password: u.password,
      role: u.role,
      pets: []
    }))
  )

  await Pet.insertMany(petsToInsert)

  res.json({
    status: 'success',
    message: 'Datos generados e insertados correctamente'
  })
})

export default router