import React from 'react';
import {Image} from 'react-native';

import {
  Container,
  ImageConnection,
  Button,
  TextButton,
  BackgroundLinear,
  BorderLinear,
  ViewGradient
} from './styles';

import logo from '../../assets/logo.png';
import connectionImage from '../../assets/connection.png';



export default function Home() {
  return (
    <Container>
      <Image source = {logo}/>
      <ImageConnection source={connectionImage}/>
      
      <Button onPress={() => {}}>
        <BorderLinear>
          <ViewGradient>
             <TextButton>Criar uma conta</TextButton>
          </ViewGradient>
        </BorderLinear>
      </Button>
     
      <Button onPress={() => {}}>
        <BackgroundLinear>
           <TextButton>Conectar na conta</TextButton>
        </BackgroundLinear>
      </Button>


    </Container>
  );
}
