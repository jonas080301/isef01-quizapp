import { majors } from '../../db'
// post /api/majors create a new major

interface IRequestBody {
    majorID: number,
    name: string
    }

export default defineEventHandler(async (event) => {
  console.log('POST /api/majors') // eslint-disable-line no-console

  // validation
  const { majorID, name } = await readBody<IRequestBody>(event)

  try {
    console.log('Create new major') // eslint-disable-line no-console

    const newmajorData = await majors.create({
      majorID,
      name
    })

    return newmajorData.toJSON()
  } catch (error) {
    console.error(error)
    event.res.statusCode = 500
    return error
  }
})
