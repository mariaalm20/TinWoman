import React from 'react'
import { useAuth } from "../services/Auth/auth";


import AppRoutes from './app'
import AuthRoutes from './auth'


const Routes = () => {
  const {signed} = useAuth()

  return signed ? <AppRoutes />: <AuthRoutes />
}

export default Routes