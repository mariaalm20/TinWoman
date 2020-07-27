import User from '../model/User'
import { Request, Response } from 'express'



class DislikeController {
   async create(req: Request, res: Response) {
      const userLogged = req.userId
      const { userId } = req.params

      const loggedUser = await User.findOne({ _id: userLogged })
      const matchUser = await User.findOne({ _id: userId })

      if (!matchUser) {
         return res.status(400).json({ error: "User not exists" })
      }

      loggedUser?.dislikes.push(matchUser._id)

      console.log(`User ${loggedUser?.email} desliked ${matchUser.email}`)

      await loggedUser?.save()
      return res.json(loggedUser)
   }
}

export default DislikeController