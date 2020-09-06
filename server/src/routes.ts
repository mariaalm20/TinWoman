import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import authMiddleware from './middlewares/auth'

import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import LikeController from './controllers/LikeController'
import DislikeController from './controllers/DislikeController'
import ChatController from './controllers/ChatController'
import ProfessionController from './controllers/ProfessionController'

import Chat from './model/Chat'

const upload = multer(multerConfig)

const routes = express.Router()

const userController = new UserController()
const sessionController = new SessionController()
const likeController = new LikeController()
const dislikeController = new DislikeController()
const chatController = new ChatController()
const professionController = new ProfessionController()

routes.post('/user', upload.single('avatar'), userController.create)

routes.post('/auth', sessionController.auth)
routes.post('/forgot_password', sessionController.forgotPassword )
routes.post('/reset_password', sessionController.resetPassword )

routes.use(authMiddleware)
routes.get('/user', userController.index)
routes.post('/user/:userId/likes', likeController.create)
routes.post('/user/:userId/dislikes', dislikeController.create)
routes.delete('/user/delete/:_id', userController.delete)

routes.get('/profession', professionController.index)

routes.post('/chat/:_id', chatController.create)
routes.delete('/profession/delete/:_id', professionController.delete)
//routes.get('/chats', chatController.index)

routes.get('/chat/userslike', chatController.list)
routes.get('/chats', chatController.index)
routes.delete('/chats/:_id', chatController.delete)
routes.post('/message', chatController.message)




export default routes