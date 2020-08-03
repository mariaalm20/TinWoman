import jwt from 'jsonwebtoken'

import path from 'path'
require('dotenv').config({path:path.join(__dirname, '../.env')})

export default function generateToken(params = {} ){
  return jwt.sign(params, `${process.env.SECRET}`, {
    expiresIn: `${process.env.EXPIRE_IN}`,
  })
}
