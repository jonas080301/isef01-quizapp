import mongoose, { Schema } from 'mongoose'

const majorSchema = new Schema({
  majorID: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: true
  }
})

export default mongoose.model('Major', majorSchema, 'major')
