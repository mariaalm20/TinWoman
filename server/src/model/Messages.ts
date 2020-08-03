import {Schema, model} from 'mongoose'

const MessageSchema = new Schema({
  text: String,
  chat: {
    type: String,
    ref: 'Chat'
  },
  sender: {
    type: String,
    ref: 'User'
  },
  receiver: {
    type: String,
    ref: 'User'
  },
  image: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
},
{
  strict: false //There may be some problems in type casting. So disable strict mode.
})

export default model('Message', MessageSchema)