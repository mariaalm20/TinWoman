import jwt from 'jsonwebtoken'

import authConfig from '../config/auth'


export default function generateToken(params = {} ){
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 85480,
  })
}
