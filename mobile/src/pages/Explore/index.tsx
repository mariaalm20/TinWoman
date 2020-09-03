import React, {useRef, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useAuth} from '../../services/Auth/auth';

//import {useNavigation} from '@react-navigation/native';
//import PulseLoader from 'react-native-pulse-loader';

import Feather from 'react-native-vector-icons/Feather';
import {Container, ButtonAction, ButtonDislike, ButtonLike} from './styles';

//import separator from '../../assets/Separator.png';
//import pessoa from '../../assets/pessoa.png';

//import {RectButton} from 'react-native-gesture-handler';
import CardStack, {Card} from 'react-native-card-stack-swiper';
//import Swiper from 'react-native-deck-swiper';

//import Button from '../../components/Button';
import CardItem from '../../components/Card';

import datausers from '../../assets/staticUsers/user';
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

const Explore: React.FC<PropsExplore> = () => {
  const [users, setUsers] = useState<PropsExplore[]>([]);
  const {userLogged} = useAuth();

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/user');
      console.log(response.data);

      setUsers(response.data.users);
    }

    loadUsers();
  }, []);

  const useSwiper = useRef(null).current;

  async function handleOnSwipedLeft() {
    const [user, ...rest] = users;

    await api.post(`/user/${user._id}/dislikes`);

    setUsers(rest);

    //console.log(quantidadeUsers)
    /*  const initial = quantidadeUsers - 1
    setQuantidades(initial)
    console.log(initial)*/
  }

  async function handleOnSwipedLRight() {
    const [user, ...rest] = users;

    await api.post(`/user/${user._id}/likes`);

    setUsers(rest);
    // useSwiper.swipeRight()
    /* const initial = quantidadeUsers - 1
    setQuantidades(initial)
    console.log(initial)*/
  }

  //const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <CardStack
        verticalSwipe={false}
        ref={useSwiper}
        renderNoMoreCards={() => <Text>Acabu :(</Text>}
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

      {users.length > 0 && (
        <ButtonAction>
          <ButtonDislike onPress={handleOnSwipedLeft}>
            <Feather name="x" size={32} color="#FF00AB" />
          </ButtonDislike>
          <ButtonLike onPress={handleOnSwipedLRight}>
            <Feather name="heart" size={32} color="#6263FF" />
          </ButtonLike>
        </ButtonAction>
      )}
    </Container>
  );
};

export default Explore;
