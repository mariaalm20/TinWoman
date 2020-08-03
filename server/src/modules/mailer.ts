import nodemailer from 'nodemailer'
import mail from '../config/mail'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'


const transport = nodemailer.createTransport({
  host: mail.host,
  port: mail.port,
  auth: {
    user: mail.user,
    pass: mail.password
  }
})

transport.use('compile', hbs({
  viewEngine: 'handlebars',
  viewPath: path.resolve('../resource/mail'),
  extName: '.html'
}))

export default transport