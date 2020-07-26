import {Schema, model} from 'mongoose'


const ChatSchema = new Schema({
    senderUser: String,
    reciever: String,
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message'
     }
    ]
}, {
    timestamps: true
})

export default model('Chat', ChatSchema)