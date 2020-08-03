import express, { NextFunction, Request, Response } from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import cors from 'cors'
import { errors } from 'celebrate';
import path from 'path'
import jwt from 'jsonwebtoken'

const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);

require('dotenv').config({path:path.join(__dirname, '../.env')})


interface Token{
  _id: string;
}

const connectedUsers: any = {};
const connectedChat: any = {};

io.use(async (socket: any, next: NextFunction) => {
  try {
    const {token} = socket.handshake.query
    const verify = await jwt.verify(token, `${process.env.SECRET}`);
    
    const {_id} = verify as Token

    socket.userId = _id
    console.log(socket.userId)
    next();
  } catch (err) {}
});


io.on('connection', (socket:any) => {
  console.log('Connected User' + socket.userId)

  const { user } = socket.handshake.query;

  connectedUsers[user] = socket.id;
})


app.use((req: Request, res: Response, next) => {
  req.io = io
  req.connectedUsers = connectedUsers

  return next()
});

mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_LOCAL}/${process.env.CLUSTER_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})


app.use(cors())
app.use(express.json()) 
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))


app.use(errors())

app.listen(3333, () => {
  console.log("🚀 Server started");
})