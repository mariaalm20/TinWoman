import { Request, Response } from 'express'

import generateToken from '../utils/generateToken'
import User from '../model/User'



interface IUser extends Request {
  userId: string
}

class UserController{
  
    async create(req: IUser, res: Response) {
      
        const { 
          email, 
          password,
          name,
          bio,
          age,
          profession,
          city,
          uf
         } = req.body

        const userExists = await User.findOne({ email: email })
        
        if (userExists) {
            return res.status(400).send({error: 'User already exists' })
        } 
        
       // const id = generateUnique()
        const user = await User.create(
          req.body
        )
     
     console.log(`User ${name} created`)
     return res.json({
       user,
       token: generateToken({_id: user._id})
     })

      }

     async index(req: Request, res: Response) {
       res.send({ok: true, user: req.userId})

        /*const { email } = req.headers

        const loggedDev = await User.findById(email)


        return res.json(loggedDev)*/
    }
}

export default UserController
