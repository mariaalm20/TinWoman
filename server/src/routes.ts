import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import authMiddleware from './middlewares/auth'

import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'

const upload = multer(multerConfig)

const routes = express.Router()

const userController = new UserController()
const sessionController = new SessionController()

routes.post('/user', upload.single('avatar'), userController.create)

routes.post('/auth', sessionController.auth)
routes.post('/forgot_password', sessionController.forgotPassword )
routes.post('/reset_password', sessionController.resetPassword )


routes.use(authMiddleware)
routes.get('/user', userController.index)


export default routes