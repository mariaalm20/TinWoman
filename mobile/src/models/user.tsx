export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  age: string;
  profession: string;
  uf: string;
  city: string;
  avatar: string;
}

export interface ResponseSignInUser {
  sucess: boolean;
  message: string;
  userExists?: User;
  token: string;
}
