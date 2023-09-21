import mongoose, { Schema } from 'mongoose'
// import { v4 as uuidv4 } from 'uuid'

const questionSchema = new Schema({
  /* id: {
    type: String,
    default: uuidv4,
    unique: true
  }, */
  question: {
    type: String,
    required: true
  },
  possibilities: {
    type: Map,
    of: String,
    required: true
  },
  correct: {
    type: [Number],
    required: true
  },
  feedback: {
    type: String,
    required: true
  },
  subject: {
    type: Number,
    required: true
  }
})

export default mongoose.model('Question', questionSchema, 'question')
