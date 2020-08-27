import React from 'react';
import {Text, Image} from 'react-native';

import {
  Container,
  Content,
  HeaderLinear,
  ContainerInfo,
  Avatar,
  ContainerPicture,
  ViewGradient,
  Name,
  Profession,
  Address,
  Age,
  ContainerGroup,
  Description,
  Separator,
  ButtonGmail,
  ButtonLinkedIn,
  ButtonFace,
  ButtonInsta,
  IconSocial
} from './styles';

import pessoa from '../../assets/match.png'


import gmail from '../../assets/gmail.png'
import face from '../../assets/face.png'
import insta from '../../assets/insta.png'
import linkedin from '../../assets/linkedIn.png'
import separator from '../../assets/Separator.png'

import Feather from 'react-native-vector-icons/Feather';


import { RectButton } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'


const Details = () => {
  const navigation = useNavigation()

  function handleNavigateExplore(){
    navigation.navigate("Explore")
  }
  
  return (
    <Container>
      <Content>
        <HeaderLinear>
          <Text></Text>
        </HeaderLinear>

        <ContainerInfo>
         
         <ContainerGroup>
         <RectButton onPress={handleNavigateExplore} style={{marginLeft: -80, height:30}}>
           <Feather name="arrow-left" size={40} color="#fff"/>
         </RectButton>
          <ContainerPicture>
            <ViewGradient>
              <Avatar source={pessoa} />
            </ViewGradient>
          </ContainerPicture>

         </ContainerGroup>
       

          <Name>Ana</Name>
          <Profession>UI/UX Designer</Profession>

          <ContainerGroup>
            <Age>21 /</Age>
            <Address>Maringá-PR</Address>
          </ContainerGroup>

          <Separator source={separator}/>

          <Description>
            Apaixonada por UI/UX designer! 
            Dê like e vamos trocar experiências incríveis a fim de socializar
            e incluir cada vez mais mulheres na nossa área!
          </Description>

          <Separator source={separator}/>
          
          <ContainerGroup>
            <ButtonGmail onPress={() => {}}>
              <IconSocial source={gmail}/>
            </ButtonGmail>
          
           <ButtonLinkedIn onPress={() => {}}>
             <IconSocial source={linkedin}/>
           </ButtonLinkedIn>
          
          <ButtonInsta onPress={() => {}}>
            <IconSocial source={insta}/>
          </ButtonInsta>

          <ButtonFace onPress={() => {}}>
            <IconSocial source={face}/>
          </ButtonFace>
          </ContainerGroup>

        </ContainerInfo>
      </Content>
    </Container>
  );
};

export default Details;
