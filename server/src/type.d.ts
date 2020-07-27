declare namespace Express {
  export interface Request {
      userId: any;
      io: any;
      connectedUsers: any;
  }
  export interface Response {
      userId: any;
      io: any;
  }
}

declare module 'nodemailer-express-handlebars'