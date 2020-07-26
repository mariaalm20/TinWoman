import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import cors from 'cors'
import { errors } from 'celebrate';
import path from 'path'
//import { Request, Response } from 'express'

const app = express()
const server = require('http').Server(app);
//const io = require('socket.io')(server);

//const connectedUsers = {};

/*io.on('connection', (socket: string) => {
  const { user } = socket.handshake.query;

  connectedUsers[user] = socket.id;
})

app.use((req: Request, res: Response, next) => {
  req.io = io
  req.connectedUsers = connectedUsers

  return next()
});*/


app.use(cors())

app.use(express.json()) 


mongoose.connect('mongodb+srv://tinwoman:tinwoman@cluster0.ajf7p.mongodb.net/Woman?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))


app.use(errors())

app.listen(3333, () => {
  console.log("🚀 Server started");
})