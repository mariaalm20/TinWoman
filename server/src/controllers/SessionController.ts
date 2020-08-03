import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import generateToken from '../utils/generateToken'

import User from '../model/User'
//import { hash } from 'bcryptjs'
import crypto from 'crypto'
import mailer from '../modules/mailer'

class SessionController {

  async auth(req: Request, res: Response) {
    const { email, password } = req.body

    const userExists = await User.findOne({ email: email }).select('+password')

    if (!userExists) {
      return res.status(400).send({ error: 'User not found' })
    }

    const validPassword = await bcrypt.compare(password, userExists.password);

    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid password' });
    };

    res.send({
      userExists,
      token: generateToken({ _id: userExists._id })
    })
  }

  async forgotPassword(req: Request, res: Response) {
    const { email } = req.body

    try {
      const user = await User.findOne({ email: email })

      if (!user) {
        return res.status(400).send({ error: 'User not found' })
      }

      const token = crypto.randomBytes(20).toString('hex')

      const now = new Date()

      now.setHours(now.getHours() + 1)

      await User.findByIdAndUpdate(user._id, {
        '$set': {
          passwordResetToken: token,
          passwordResetExpiress: now,
        }
      })

      mailer.sendMail({
        to: email,
        from: 'maria.almoliveira@gmail.com',
        html: `<p>Você esqueceu sua senha? Utilize esse token: ${token}</p>`,
      }, (err) => {
        if (err)
          return res.status(400).send({ error: 'Cannot send forgot password ' })
        return res.send()
      })

      console.log(token, now)

    } catch (err) {
      res.status(400).send({ error: 'Password not accept, try again' })
    }
  }

  async resetPassword(req: Request, res: Response) {
    const { email, token, password } = req.body

    try {
      const user = await User.findOne({ email: email }).select('+passwordResetToken +passwordResetExpiress')

      if (!user) {
        return res.status(400).send({ error: 'User not found' })
      }

      if (token !== user.passwordResetToken) {
        return res.status(400).send({ error: 'Invalid Token' })
      }

      const now = new Date()

      if (now > user.passwordResetExpiress) {
        return res.status(400).send({ error: 'Token expiress' })
      }

      user.password = password

      await user.save()

      res.send()

    } catch (err) {
      res.status(400).send({ error: 'Cannot reset password' })
    }
  }
}

export default SessionController
