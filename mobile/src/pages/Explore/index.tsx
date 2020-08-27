import React from 'react';
import {View, Text, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
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
  ButtonAction,
  ButtonLike,
  ButtonDislike,
} from './styles';

import pessoa from '../../assets/match.png';
import separator from '../../assets/Separator.png'


import {RectButton} from 'react-native-gesture-handler';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Button from '../../components/Button';

const Explore = () => {
  const navigation = useNavigation();

  function handleNavigateDetails() {
    navigation.navigate('Details');
  }

  return (
    <Container>
      <Content>
        <HeaderLinear>
          <Text></Text>
        </HeaderLinear>

        <ContainerInfo>
          <ContainerPicture>
            <ViewGradient>
              <Avatar source={pessoa} />
            </ViewGradient>
          </ContainerPicture>

          <Name>Ana</Name>
          <Profession>UI/UX Designer</Profession>

          <ContainerGroup>
            <Age>21 /</Age>
            <Address>Maringá-PR</Address>
          </ContainerGroup>

          <Separator source={separator} />

          <Description>
            Apaixonada por UI/UX designer! Dê like e vamos trocar
            experiências...
          </Description>

          <RectButton onPress={handleNavigateDetails}>
            <Button
              isBackgroundLinear
              textButton="Detalhes"
              width={`${wp('35')}`}
              height={`${hp('4')}`}
              fontSize={15}
            />
          </RectButton>
        </ContainerInfo>
      </Content>

      <ButtonAction>
        <ButtonDislike>
          <Feather name="x" size={32} color="#FF00AB" />
        </ButtonDislike>
        <ButtonLike>
          <Feather name="heart" size={32} color="#6263FF" />
        </ButtonLike>
      </ButtonAction>
    </Container>
  );
};

export default Explore;
