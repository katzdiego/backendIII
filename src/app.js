import express from 'express'
import mocksRouter from './routes/mocks.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/ping', (req, res) => res.send('pong'))

app.use('/api/mocks', mocksRouter)

export default app