import crypto from 'crypto'


 function generateUniqued() {
    return crypto.randomBytes(4).toString('hex')
 }


export default generateUniqued