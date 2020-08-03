import {Schema, model, Document} from 'mongoose'

const ChatSchema = new Schema({
  users: [{
    type: Schema.Types.Array,
    ref: 'User'
  }],
}, {
    timestamps: true
})


interface UserSchema extends Document {
  _id: {
    type: string,
    required: true
  }
}

export default model<UserSchema>('Chat', ChatSchema)