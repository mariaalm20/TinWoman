import { Request, Response } from 'express'

import generateToken from '../utils/generateToken'
import User from '../model/User'

class UserController{
  
    async create(req: Request, res: Response) {
      
        const { 
          email, 
          name,
         } = req.body

        const userExists = await User.findOne({ email: email })
        
        if (userExists) {
            return res.status(400).send(userExists)
        } 
    
        
        const user = await User.create(
          req.body,
        )
     
     console.log(`User ${name} created`)
     return res.json({
       user,
       avatar: req.file.filename,
       token: generateToken({_id: user._id})
     })

      }

     async index(req: Request, res: Response) {
       //.send({ok: true, user: req.userId})

       const { email } = req.headers

       const loggedDev = await User.findById(email)

        const users = await User.find({
            $and: [
                { _id: { $ne: email } },
                { _id: { $nin: loggedDev?.likes } },
                { _id: { $nin: loggedDev?.dislikes } }
            ]
        }).sort({_id: -1})

        return res.json({
          user: req.userId,
          users
        })
    }

    async delete (req: Request, res: Response){
      const _id = req.params
      
      await User.findByIdAndDelete(_id)

      return res.status(204).send({message: 'User destroy'})

    }
}

export default UserController
