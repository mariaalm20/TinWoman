import User from '../model/User'

import { Request, Response } from 'express'


class LikeController {

  async create(req: Request, res: Response) {
    const userLogged = req.userId
    const { userId } = req.params

    const loggedUser = await User.findOne({ _id: userLogged }).select('+password')
    const matchUser = await User.findOne({ _id: userId })

    if (!matchUser) {
      return res.status(400).json({ error: "User not exists" })
    }


    loggedUser?.likes.push(matchUser._id)

    await loggedUser?.save()

    console.log(`User ${loggedUser?.email} liked ${matchUser._id}`)


    try {
      if (matchUser.likes.includes(loggedUser?._id)) {
        const loggedSocket = req.connectedUsers[userLogged]
        const matchSocket = req.connectedUsers[userId]

        if (loggedSocket) {
          req.io.to(loggedSocket).emit('match', matchUser)
        }
        if (matchSocket) {
          req.io.to(matchSocket).emit('match', loggedUser)
        }
      }
      return res.json(loggedUser)
    } catch (err) {
      return res.status(400).send({ error: 'Cannot realized operation' })
    }
  }
}

export default LikeController