import { subjects } from '../../db'

export default defineEventHandler(async (event) => {
  console.log('GET /api/subject') // eslint-disable-line no-console

  try {
    const subjectData = await subjects.find()
    return subjectData.map(q => q.toJSON())
  } catch (error) {
    console.error(error)
    event.res.statusCode = 50
    return error
  }
})
