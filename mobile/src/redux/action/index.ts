import {User, ADD_USER, UserAction} from '../types'


export function getUserAdd(user: User): UserAction{
  return {
    type: ADD_USER,
    payload: user
  }
}