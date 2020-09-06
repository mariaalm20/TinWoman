
import {ADD_USER, UserAction, User } from '../types'


const INITIAL_STATE: User = { 
   name: 'Maria', 
   email: '', 
   password: '', 
   age: '', 
   profession: '',
   uf: '', 
   city: '',
   avatar: '', 
   description: '' 
}

export default (state = INITIAL_STATE, action: UserAction) => {
  switch(action.type){
    case ADD_USER: 
      return Object.assign({}, state, {...state, loading: true, sucess: false, error: false})
    default:
      return state
  }
}