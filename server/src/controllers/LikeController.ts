import User from '../model/User'
import {Schema} from 'mongoose'

import { Request, Response } from 'express'


interface Like {
  likes:  Schema.Types.ObjectId
}


class LikeController {

   async create(req: Request, res: Response){
      const userLogged = req.headers
      const userId = req.params

      const loggedUser = await User.findOne(userLogged)
      const matchUser = await User.findOne(userId)

      if(!matchUser){
        return res.status(400).json({error: "User not exists"})
      }

      //if(matchUser.likes.includes(loggedUser._id)){
       // const loggedSocket = req.connectUsers[]
     // }
   }
}

export default LikeController