import { subjects } from '../../db'

export default defineEventHandler(async (event) => {
  console.log('GET /api/subjects') // eslint-disable-line no-console

  const req:{majorID: number} = getQuery(event)
  const majorID = req.majorID

  if (majorID !== undefined) {
    const foundSubjects = subjects.find({ majors: { $in: [majorID] } })
      .then((subject) => {
        if (subject) {
          return subject.map(q => q.toJSON())
        } else {
          console.log('No subject found for the given majorID') // eslint-disable-line no-console
        }
      })
      .catch((error) => {
        console.error('An error occurred:', error)
      })

    return foundSubjects
  } else {
    // fetch and return all subjects
    try {
      const subjectData = await subjects.find(

      )
      return subjectData.map(q => q.toJSON())
    } catch (error) {
      console.error(error)
      event.res.statusCode = 50
      return error
    }
  }
})
