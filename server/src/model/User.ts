import {Schema, model, Document} from 'mongoose'
import bcrypt from 'bcryptjs'
//import UserController from '../Controllers/UserController'


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    passwordResetToken: {
      type: String,
      select: false,
    },
    passwordResetExpiress: {
      type: Date,
      select: false,
    },
    age: {
      type: Number,
      required: true
    },
    profession: {
      type: String,
      required: true
    }, 
    uf: {
      type: String,
      required: true
      },
    city: {
      type: String,
      required: true
     },
    avatar: String,
    bio: String,
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
}, {
    timestamps: true,
    strict: false,
})

interface PasswordSchema extends Document {
  password: string;
  likes: any;
  dislikes: any;
  passwordResetToken: string;
  passwordResetExpiress: Date;
  email: string;
  avatar: string;
  name: string;
  city: string;
  uf: string;
}

UserSchema.pre<PasswordSchema>('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})


export default model<PasswordSchema>('User', UserSchema)