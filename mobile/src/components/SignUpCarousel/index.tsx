import React, {useRef, useState} from 'react';
import {
  View,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {useNavigation} from '@react-navigation/native';

import FirstPage from '../SignUpPages/FirstPage';
import SecondPage from '../SignUpPages/SecondPage';
import PicturePage from '../SignUpPages/PicturePage';
import LastPage from '../SignUpPages/LastPage';

import ButtonGradient from '../Button';

import {Content, ContainerButton, Container} from './styles';

import api from '../../services/api';

interface Props {
  passo1: {name: string; email: string; password: string};
  passo2: {age: string; profession: string; city: string; uf: string};
}

const SignUpCarousel = () => {
  const navigation = useNavigation();
  const [flatListRef, setFlatListRef] = useState(null);
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState({
    passo1: {name: '', email: '', password: ''},
    passo2: {age: '', profession: '', city: '', uf: ''},
  });
  const [lista, setLista] = useState([
    {input: ''},
    {input: ''},
    {input: ''},
    {input: ''},
  ]);
  const scrollX = useRef(new Animated.Value(0)).current;

  const {width: windowWidth} = useWindowDimensions();

  async function handleSignUp() {
    const userStorage = await AsyncStorage.getItem('user');
    const userSecond = await AsyncStorage.getItem('second');
    console.log(userStorage, userSecond);

    await api.post('/user', userStorage);

    navigation.navigate('SignIn');
  }

  // @ts-ignore
  return (
    <Content>
      <Container>
        <Animated.FlatList
          ref={(thisFlatList) => setFlatListRef(thisFlatList)}
          data={lista}
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: true},
          )}
          scrollEventThrottle={1}
          renderItem={({item}) => (
            <View style={{width: windowWidth, height: 250}} key={item.input}>
              {index === 0 ? (
                //@ts-ignore
                <View>
                  <FirstPage
                    user={user}
                    updateUser={(value: any) =>
                      setUser({...user, passo1: value})
                    }
                  />
                </View>
              ) : index === 1 ? (
                //@ts-ignore
                <View>
                  <SecondPage
                    user={user}
                    updateuser={(value: any) =>
                      setUser({...user, passo2: value})
                    }
                  />
                </View>
              ) : index === 2 ? (
                <View>
                  <PicturePage />
                </View>
              ) : (
                <View>
                  <LastPage />
                </View>
              )}
            </View>
          )}
        />

        <ContainerButton>
          {index <= 2 ? (
            <TouchableOpacity
              onPress={() => {
                if (index < lista.length - 1) {
                  let newIndex = index + 1;
                  setIndex(newIndex);
                  flatListRef.scrollToIndex({animated: true, index: newIndex});
                }
              }}>
              <ButtonGradient isBackgroundLinear textButton="Próximo" isSmall />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleSignUp}>
              <ButtonGradient
                isBackgroundLinear
                textButton="Finalizar"
                isSmall
              />
            </TouchableOpacity>
          )}
        </ContainerButton>
      </Container>
    </Content>
  );
};

export default SignUpCarousel;
