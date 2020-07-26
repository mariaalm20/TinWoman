import {Request} from 'express'


export interface UserId extends Request{
  userId: string
}
