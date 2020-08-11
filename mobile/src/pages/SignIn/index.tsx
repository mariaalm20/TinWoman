import React from 'react';
import {Image, Text, KeyboardAvoidingView, Platform} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto'

import {
  Container,
  Title,
  Content,
  Logo,
  Input,
  Button,
  ForgotPassword,
  ContainerInput,
  FontistoIcon
} from './styles';

import logo from '../../assets/logoChat.png';

import ButtonGradient from '../../components/Button'
import InputComponent from '../../components/Input'

export default function SignIn() {
  return (

    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    enabled
    >
    <Container 
    keyboardShouldPersistTaps="handled"
    contentContainerStyle={{ flex: 1 }}
    >
      <Logo source={logo} />

      <Title>Conectar na conta</Title>

      <Content>
        <ContainerInput>
          <FontistoIcon name="email"/>
          <Input
           autoCorrect={false}
           autoCapitalize="none"
           keyboardType="email-address"
           placeholder="E-mail"
           returnKeyType="next"
          />
        </ContainerInput>
        <Input 
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Password"
          returnKeyType="next"
        />
        <Button>
           <ButtonGradient isBackgroundLinear textButton="Entrar"/>
        </Button>
        <ForgotPassword>Esqueci a Senha</ForgotPassword>
      </Content>
    </Container>
    </KeyboardAvoidingView>
  );
}
