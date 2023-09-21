import { majors } from '../../db'

export default defineEventHandler(async (event) => {
  console.log('GET /api/majors') // eslint-disable-line no-console

  try {
    const majorsData = await majors.find()
    return majorsData.map(q => q.toJSON())
  } catch (error) {
    console.error(error)
    event.res.statusCode = 50
    return error
  }
})
