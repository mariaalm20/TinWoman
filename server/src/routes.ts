import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import authMiddleware from './middlewares/auth'

import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import LikeController from './controllers/LikeController'
import DislikeController from './controllers/DislikeController'

const upload = multer(multerConfig)

const routes = express.Router()

const userController = new UserController()
const sessionController = new SessionController()
const likeController = new LikeController()
const dislikeController = new DislikeController()

routes.post('/user', upload.single('avatar'), userController.create)

routes.post('/auth', sessionController.auth)
routes.post('/forgot_password', sessionController.forgotPassword )
routes.post('/reset_password', sessionController.resetPassword )

routes.use(authMiddleware)
routes.get('/user', userController.index)
routes.post('/user/:userId/likes', likeController.create)
routes.post('/user/:userId/dislikes', dislikeController.create)




export default routes