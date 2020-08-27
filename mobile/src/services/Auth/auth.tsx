import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage  from "@react-native-community/async-storage";
import api from "../api";
import { ResponseSignInUser, User } from "../../models/user";
import { AxiosResponse } from "axios";

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(
    email: string,
    password: string
  ): Promise<AxiosResponse<ResponseSignInUser>>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoregedData() {
      const storegedUser = await AsyncStorage.getItem("@Auth:user");

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (storegedUser) {
        setUser(JSON.parse(storegedUser));
        setLoading(false);
      } else if (!storegedUser) {
        setLoading(false);
      }
    }

    loadStoregedData();
  }, []);

  async function signIn(email: string, password: string) {
    const response = await api.post<ResponseSignInUser>("/auth", {
      email,
      password,
    });

    const userData = response.data.userExists 
    console.log(userData)
    
    if (userData) {
      setUser(userData);
      console.log(user)

      await AsyncStorage.setItem(
        "@Auth:user",
        JSON.stringify(userData)
      );
    }
    return response;
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}