import { questions } from '../../db'
// post /api/questions create a new question

interface IRequestBody {
    question: string
    possibilities: {
        [key: number]: string
    }
    correct: number[]
    feedback: string
    subject: number
    }

export default defineEventHandler(async (event) => {
  console.log('POST /api/questions') // eslint-disable-line no-console

  const { question, possibilities, correct, feedback, subject } = await readBody<IRequestBody>(event)

  try {
    console.log('Create new question') // eslint-disable-line no-console

    const newQuestionData = await questions.create({
      question,
      possibilities,
      correct,
      feedback,
      subject
    })

    return newQuestionData.toJSON()
  } catch (error) {
    console.error(error)
    event.res.statusCode = 500
    return error
  }
})
