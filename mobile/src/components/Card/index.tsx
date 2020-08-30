import React, {ReactNode} from 'react';
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
import separator from '../../assets/Separator.png';

import {RectButton} from 'react-native-gesture-handler';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Button from '../../components/Button';

interface PropsCard {
  actions?: ReactNode;
  name: string;
  age: number;
  city: string;
  uf: string;
  avatar: string;
  profession: string;
  description: string;
  onPressLeft?: ReactNode,
 onPressRight?: ReactNode,
}

const CardItem: React.FC<PropsCard> = ({
  name,
  age,
  city,
  uf,
  avatar,
  profession,
  description,
  actions,
  onPressLeft,
  onPressRight
}) => {
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
              <Avatar source={{uri: avatar}} />
            </ViewGradient>
          </ContainerPicture>

          <Name>{name}</Name>
          <Profession>{profession}</Profession>

          <ContainerGroup>
            <Age>{age} /</Age>
            <Address>{city}-{uf}</Address>
          </ContainerGroup>

          <Separator source={separator} />

          <Description>
            {description}
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

    </Container>
  );
};

export default CardItem;
