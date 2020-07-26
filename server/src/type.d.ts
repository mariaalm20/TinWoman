declare namespace Express {
  export interface Request {
      userId: any;
  }
  export interface Response {
      userId: any;
  }
}

declare module 'nodemailer-express-handlebars'