import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
//import {UserId} from '../utils/userId'

import path from 'path'
require('dotenv').config({path:path.join(__dirname, '../.env')})

interface Token{
  _id: string;
}

interface IUser extends Request {
  userId: string
}

export default async (req: IUser, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if(!authHeader){
    return res.status(401).send({error: "No token provider"})
  }

  const token = authHeader.replace('Bearer', '').trim();
  
  try {  

    const verify =  jwt.verify(token, `${process.env.SECRET}`)
      
     const { _id } = verify as Token;
      
      req.userId = _id
      console.log(_id)
      return next()
  } catch(err){
    return res.status(401).json({error: 'Invalid Token'})
  }
}