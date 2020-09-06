export interface User {
  name: string;
  email: string;
  password: string;
  age: string;
  profession: string;
  uf: string;
  city: string;
  avatar: string;
  description: string;
}

export const ADD_USER = 'ADD_USER'

interface AddUserAction {
  type: typeof ADD_USER
  payload: User
}

export type UserAction = AddUserAction


