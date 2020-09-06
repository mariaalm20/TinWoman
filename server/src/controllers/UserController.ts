import { Request, Response } from 'express'

import generateToken from '../utils/generateToken'
import User from '../model/User'
import Profession from '../model/Profession'

class UserController{
  
    async create(req: Request, res: Response) {
        const { 
          email, 
          name,
          city,
          uf,
          password,
          age,
          bio,
          profession
         } = req.body

         const { filename } = req.file


        const userExists = await User.findOne({ email: email })
        
        if (userExists) {
            return res.status(400).send(userExists)
        } 

        const professionExists = await Profession.findOne({profession: profession})

        if(professionExists){
          return res.status(400).send(professionExists)
        }

       
         const createProfession = await Profession.create({profession})

         const _id = createProfession._id

         const idProfession = await Profession.findById({_id})
    
        
        const user = await User.create({
          email, 
          name,
          profession,
          city,
          uf,
          password,
          age,
          bio,
          avatar: filename,
          professionId: idProfession
        })

     console.log(`User ${name} created`)

     return res.json({
       user,
       token: generateToken({_id: user._id})
     })

      }

     async index(req: Request, res: Response) {
       //.send({ok: true, user: req.userId})
       const {id} = req.query

       const loggedUser = req.userId

        const users = await User.find({
           professionId: id,
            $and: [
                { _id: { $ne: loggedUser } },
                { _id: { $nin: loggedUser?.likes } },
                { _id: { $nin: loggedUser?.dislikes } }
            ]
        }).sort({_id: -1})


        return res.json({
          user: req.userId,
          users,
        })
    }

    async delete (req: Request, res: Response){
      const _id = req.params
      
      await User.findByIdAndDelete(_id)

      return res.status(204).send({message: 'User destroy'})

    }
}

export default UserController
