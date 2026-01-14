import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mockingDB')
    console.log('DB conectada correctamente')
  } catch (error) {
    console.error('Error conectando a MongoDB:', error.message)
  }
}