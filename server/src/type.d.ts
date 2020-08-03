declare namespace Express {
  export interface Request {
      userId: any;
      io: any;
      connectedUsers: any;
      connectedChat: any;
  }
  export interface Response {
      userId: any;
      io: any;
  }
}

declare module 'nodemailer-express-handlebars'
declare module 'dotenv/config'