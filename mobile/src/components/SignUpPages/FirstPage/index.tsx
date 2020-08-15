import React, {useState, useEffect, useRef, ReactNode} from 'react';
import {View} from 'react-native';

import {ContainerInput, Button, ContainerButton} from './styles';

import normalize from 'react-native-normalize';
import {Input} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-community/async-storage';

import {bindActionCreators, Dispatch} from 'redux'
import {connect} from 'react-redux'

import * as actions from '../../../redux/action'

import ButtonGradient from '../../Button';


interface RootState {
    name: string;
    email: string;
    password: string;
}


type TUserListProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;



const FirstPage: React.FC<TUserListProps>= ({user}) => {

   const inputNameRef = useRef<Input>()
   const inputEmailRef = useRef<Input>()
   const inputPasswordRef = useRef<Input>()

  //const [user, setUser] = useState<SignUpFirst[]>([]);
  
  async function handleSignUp() {
    
  }

  useEffect(() => {
    handleSignUp()
  }, [])

  return (
    <ContainerInput>
          <View>
            <Input
              leftIcon={<Feather name="user" size={24} color="#c4c4c4" />}
              leftIconContainerStyle={{
                marginLeft: normalize(2),
                marginRight: normalize(16),
              }}
              label="Nome"
              placeholder="Julia Silva"
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
              returnKeyType="next"
              blurOnSubmit={false}
              ref={inputNameRef}
              onSubmitEditing={() => inputEmailRef.current?.focus()}
              value={user.name}
              //onChangeText={(text: string) => setName(text)}
            />

            <Input
              leftIcon={<Feather name="mail" size={24} color="#c4c4cc" />}
              leftIconContainerStyle={{
                marginLeft: normalize(0),
                marginRight: normalize(10),
              }}
              label="Email"
              placeholder="julia@gmail.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              blurOnSubmit={false}
              ref={inputEmailRef}
              onSubmitEditing={() => inputPasswordRef.current?.focus()}
              value={user.email}
              //onChangeText={(text: string) => setEmail(text)}
            />

            <Input
              leftIcon={<Feather name="lock" size={24} color="#c4c4c4" />}
              leftIconContainerStyle={{
                marginLeft: normalize(0),
                marginRight: normalize(10),
              }}
              label="Senha"
              placeholder="******"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="send"
              errorStyle={{color: '#FB0404', fontSize: normalize(14)}}
              ref={inputPasswordRef}
              value={user.password}
              //onChangeText={(text: string) => setPassword(text)}
            />
          </View>
    </ContainerInput>
  );
};


const mapStateToProps = (state: RootState) => ({
  user: state
})


const mapDispatchToProps = (dispatch: Dispatch) => (bindActionCreators(actions, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage)