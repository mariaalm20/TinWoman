import React from 'react';
import {
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';

import {
  Container,
  Title,
  Content,
  Logo,
  Input,
  Button,
  ForgotPassword,
  ContainerInput,
  FontistoIcon,
} from './styles';

import logo from '../../assets/logoChat.png';

import ButtonGradient from '../../components/Button';
import Carousel from '../../components/SignUpCarousel';

export default function SignUp() {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <Container
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}>
        <Logo source={logo} />

        <Title>Criar uma conta</Title>

        <Carousel />
      </Container>
    </KeyboardAvoidingView>
  );
}
