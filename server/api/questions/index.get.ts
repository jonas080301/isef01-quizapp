import { questions } from '../../db'

export default defineEventHandler(async (event) => {
  console.log('GET /api/question') // eslint-disable-line no-console

  try {
    const questionsData = await questions.find()
    return questionsData.map(q => q.toJSON())
  } catch (error) {
    console.error(error)
    event.res.statusCode = 50
    return error
  }
})
