import React, {useRef, useState, useEffect} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {useAuth} from '../../services/Auth/auth';

import {useNavigation, useRoute} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import {
  Container,
  ButtonAction,
  ButtonDislike,
  ButtonLike,
  TextEnded,
  ContainerEnded,
} from './styles';

import CardStack, {Card} from 'react-native-card-stack-swiper';

import CardItem from '../../components/Card';

//import datausers from '../../assets/staticUsers/user';
import api from '../../services/api';

interface PropsExplore {
  _id: string;
  name: string;
  profession: string;
  age: number;
  city: string;
  uf: string;
  bio: string;
  avatar: string;
  description?: string;
}

export interface Profession {
  profession: number[];
}

const Explore: React.FC<PropsExplore> = () => {
  const [users, setUsers] = useState<PropsExplore[]>([]);
  const [loading, setLoading] = useState(true);

  const {userLogged} = useAuth();
  const route = useRoute();

  const routeParams = route.params as Profession;
  console.log(routeParams.profession);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/user', {
        params: {
          profession: routeParams.profession,
        },
      });
      console.log(response.data);

      setUsers(response.data.users);
      setLoading(false);
    }

    loadUsers();
  }, [routeParams.profession]);

  const useSwiper = useRef(null).current;

  async function handleOnSwipedLeft() {
    const [user, ...rest] = users;

    await api.post(`/user/${user._id}/dislikes`);

    setUsers(rest);
  }

  async function handleOnSwipedLRight() {
    const [user, ...rest] = users;

    await api.post(`/user/${user._id}/likes`);

    setUsers(rest);
  }

  //const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color="#6263FF" />
      ) : (
        <>
          {users.length > 0 ? (
            <>
              <CardStack
                verticalSwipe={false}
                renderNoMoreCards={() => <Text />}
                ref={useSwiper}
                onSwiped={() => console.log('onSwipped')}
                onSwipedLeft={handleOnSwipedLeft}
                onSwipedRight={handleOnSwipedLRight}>
                {users.map((item, index) => (
                  <Card key={index}>
                    {!!userLogged && (
                      <CardItem
                        //avatar={pessoa}
                        name={item.name}
                        city={item.city}
                        uf={item.uf}
                        profession={item.profession}
                        age={item.age}
                        description={item.bio}
                      />
                    )}
                  </Card>
                ))}
              </CardStack>

              <ButtonAction>
                <ButtonDislike onPress={handleOnSwipedLeft}>
                  <Feather name="x" size={32} color="#FF00AB" />
                </ButtonDislike>
                <ButtonLike onPress={handleOnSwipedLRight}>
                  <Feather name="heart" size={32} color="#6263FF" />
                </ButtonLike>
              </ButtonAction>
            </>
          ) : (
            <ContainerEnded>
              <TextEnded>Que pena acabou :(</TextEnded>
            </ContainerEnded>
          )}
        </>
      )}
    </Container>
  );
};

export default Explore;
