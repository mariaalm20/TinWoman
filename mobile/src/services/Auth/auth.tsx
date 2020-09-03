import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../api';
import {ResponseSignInUser, User} from '../../models/user';
import {AxiosResponse} from 'axios';

interface AuthContextData {
  signed: boolean;
  userLogged: User | null;
  loading: boolean;
  signIn(
    email: string,
    password: string,
  ): Promise<AxiosResponse<ResponseSignInUser>>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [userLogged, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoregedData() {
      const storegedUser = await AsyncStorage.getItem('@Auth:user');
      const storegedToken = await AsyncStorage.getItem('@Auth:token');

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (storegedUser && storegedToken) {
        api.defaults.headers.Authorization = `Bearer ${storegedToken}`;
        setUser(JSON.parse(storegedUser));
        setLoading(false);
      } else if (!storegedUser) {
        setLoading(false);
      }
    }

    loadStoregedData();
  }, []);

  async function signIn(email: string, password: string) {
    const response = await api.post<ResponseSignInUser>('/auth', {
      email,
      password,
    });

    const userData = response.data.userExists;
    const userToken = response.data.token;
    console.log(userToken);

    if (userData) {
      setUser(userData);
      console.log(userLogged);

      api.defaults.headers.Authorization = `Bearer ${userToken}`;

      await AsyncStorage.setItem('@Auth:user', JSON.stringify(userData));

      await AsyncStorage.setItem('@Auth:token', JSON.stringify(userToken));
    }
    return response;
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{signed: !!userLogged, userLogged, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
