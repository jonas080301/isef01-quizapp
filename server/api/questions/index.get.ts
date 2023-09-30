import { questions } from '../../db'

export default defineEventHandler(async (event) => {
  console.log('GET /api/question') // eslint-disable-line no-console
  let params:any = getQuery(event);

  try {
    const questionsData = await questions.aggregate([
      {
        $match: {
          ["subject"]: parseInt(params.subject)
        }
      },
      {
        $sample: {
          size: 1
        }
      }
    ])
    if(questionsData.length < 1){
      return {error: "Keine Frage für dieses Themengebiet gefunden 😢"}
    }
    else{
      return questionsData
    }
    
  } catch (error) {
    console.error(error)
    event.res.statusCode = 50
    return error
  }
})

