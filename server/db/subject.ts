import mongoose, { Schema } from 'mongoose'

const subjectSchema = new Schema({
  subjectID: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  majors: {
    type: [Number],
    required: true
  }
})

export default mongoose.model('Subject', subjectSchema, 'subject')
