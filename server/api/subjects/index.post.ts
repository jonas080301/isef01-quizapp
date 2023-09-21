import { subjects } from '../../db'
// post /api/subjects create a new subject

interface IRequestBody {
    subjectID: number,
    name: string,
    majors: number[]
    }

export default defineEventHandler(async (event) => {
  console.log('POST /api/subjects') // eslint-disable-line no-console

  const { subjectID, name, majors } = await readBody<IRequestBody>(event)

  try {
    console.log('Create new subject') // eslint-disable-line no-console

    const newSubjectData = await subjects.create({
      subjectID,
      name,
      majors
    })

    return newSubjectData.toJSON()
  } catch (error) {
    console.error(error)
    event.res.statusCode = 500
    return error
  }
})
