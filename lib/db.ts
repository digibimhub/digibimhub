import { MongoClient } from 'mongodb'

let client: MongoClient | null = null

export async function connectDB() {
  if (client) return client

  const uri = process.env.MONGODB_URI || ''
  client = new MongoClient(uri)

  try {
    await client.connect()
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }

  return client
}

export async function getDB() {
  const client = await connectDB()
  return client.db('digibimhub')
}
