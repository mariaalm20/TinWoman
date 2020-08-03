import Chat from '../model/Chat'
import User from '../model/User'
import Message from '../model/Messages'
import { Request, Response } from 'express'


class ChatController {

   async create(req: Request, res: Response) {
      const userLogged = req.userId
      const userMatch = req.params

      const loggedUser = await User.findOne({ _id: userLogged })
      const matchUser = await User.findOne({ _id: userMatch })

      const userLikeId = loggedUser?.likes

      if (userLikeId.includes(matchUser?._id)) {

         const idUserLogged = loggedUser?._id
         const idUserLiked = matchUser?._id

         const users = [{ idUserLiked, idUserLogged }]

         const chatExists = await Chat.findOne({ users: users })
         console.log(chatExists)

         if (chatExists) {
            let messages = await Message.find({ chat: chatExists._id })
            return res.json({ chat: chatExists, messages: messages })
         }

         const newChat = new Chat({
            users: { idUserLiked, idUserLogged }
         })

         await newChat.save()


         return res.json({
            chat: newChat,
            messages: []
         })
      }

   }

   async index(req: Request, res: Response) {
      const chats = await Chat.find({})

      return res.json({
         chats
      })
   }

   async list(req: Request, res: Response) {
      const userLogged = req.userId

      const loggedUser = await User.findOne({ _id: userLogged })

      const usersLiked = loggedUser?.likes

      const objectUserLikeId = await User.find({ _id: usersLiked })

      return res.json({
         objectUserLikeId
      })

   }

   async message(req: Request, res: Response) {
      const { message } = req.body

      const newMessage = new Message(message)
      await newMessage.save()

      req.io.emit(`${message.chat}`, newMessage)
      res.sendStatus(200)
   }

   async delete(req: Request, res: Response) {
      const _id = req.params

      await Chat.findByIdAndDelete(_id)

      return res.status(204).send({ message: 'User destroy' })

   }
}

export default ChatController