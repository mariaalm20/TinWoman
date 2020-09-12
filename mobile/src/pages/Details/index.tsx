import React from 'react';

import {
  Container,
  ButtonLinking,
  Separator,
  ContainerGroup,
  ButtonToExplore,
  Content,
} from './styles';

import separator from '../../assets/Separator.png';

import CardItem from '../../components/Card';
import Button from '../../components/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useNavigation, useRoute} from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Linking} from 'react-native';

interface PropsExplore {
  item: {
    _id: string;
    name: string;
    profession: string;
    age: number;
    city: string;
    uf: string;
    bio: string;
    avatar: string;
    email: string;
  };
}

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as PropsExplore;
  console.log(routeParams);

  function handleNavigateExplore() {
    navigation.navigate('Explore');
  }

  async function sendMail() {
    Linking.openURL(`mailto:${routeParams.item.email}`);
  }

  return (
    <Container>
      <CardItem
        //avatar={}
        age={routeParams.item.age}
        city={routeParams.item.city}
        name={routeParams.item.name}
        profession={routeParams.item.profession}
        uf={routeParams.item.uf}
        description={routeParams.item.bio}>
        <Content>
          <Separator source={separator} />

          <ContainerGroup>
            <ButtonLinking onPress={sendMail}>
              <MaterialIcons name="gmail" size={30} color="#c4c4c4" />
            </ButtonLinking>

            <ButtonLinking onPress={() => {}}>
              <MaterialIcons name="linkedin" size={30} color="#c4c4c4" />
            </ButtonLinking>

            <ButtonLinking onPress={() => {}}>
              <MaterialIcons name="instagram" size={30} color="#c4c4c4" />
            </ButtonLinking>

            <ButtonLinking onPress={() => {}}>
              <MaterialIcons name="facebook" size={30} color="#c4c4c4" />
            </ButtonLinking>
          </ContainerGroup>

          <ButtonToExplore onPress={handleNavigateExplore}>
            <Button
              isBackgroundLinear
              textButton="Voltar"
              width={`${wp('35')}`}
              height={`${hp('6')}`}
              fontSize={16}
            />
          </ButtonToExplore>
        </Content>
      </CardItem>
    </Container>
  );
};

export default Details;
