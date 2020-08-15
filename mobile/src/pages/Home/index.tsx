import React from 'react';
import {Image} from 'react-native';

import {
  Container,
  ImageConnection,
  Button,
  ButtonContainer,
  BackgroundLinear,
  TextButton
} from './styles';

import logo from '../../assets/logo.png';
import connectionImage from '../../assets/connection.png';

import {useNavigation} from '@react-navigation/native'

import ButtonLinear from '../../components/Button'

export default function Home() {
  const navigation = useNavigation()

  function handleGoToLogin(){
    navigation.navigate('SignIn')
  }

  function handletoSignUp(){
    navigation.navigate('SignUp')
  }

  return (
    <Container>
      <Image source={logo} />
      <ImageConnection source={connectionImage} />

      <ButtonContainer>
        <Button onPress={() => handletoSignUp()}>
           <ButtonLinear textButton="Criar uma conta"/>
        </Button>

        <Button onPress={() => handleGoToLogin()}>
            <BackgroundLinear>
              <TextButton>Conectar na conta</TextButton>
            </BackgroundLinear>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
