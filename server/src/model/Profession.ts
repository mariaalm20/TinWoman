import {Schema, model} from 'mongoose'
import {autoIncrement} from 'mongoose-plugin-autoinc'

const ProfessionSchema = new Schema({
    profession : {
    type: String,
    ref: 'User'
    }
  })

ProfessionSchema.plugin(autoIncrement, 'Profession')

export default model('Profession', ProfessionSchema)