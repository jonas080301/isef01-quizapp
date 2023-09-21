import mongoose from 'mongoose'

const config = useRuntimeConfig()

export default async () => {
  try {
    await mongoose.connect(config.mongoUrl, {
      dbName: 'quizapp'
    })

    console.log('\x1B[32m%s\x1B[0m', '✔', 'DB connection established') // eslint-disable-line no-console
  } catch (err) {
    console.error('DB connection failed', err)
  }
}
