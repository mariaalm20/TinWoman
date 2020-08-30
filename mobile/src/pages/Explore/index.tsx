import React, {ReactNode, useRef, useState} from 'react';
import {View, Text, Animated} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import PulseLoader from 'react-native-pulse-loader'

import Feather from 'react-native-vector-icons/Feather';
import {Container, ButtonAction, ButtonDislike, ButtonLike} from './styles';

import pessoa from '../../assets/match.png';
import separator from '../../assets/Separator.png';

import {RectButton} from 'react-native-gesture-handler';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import Swiper from 'react-native-deck-swiper';

import Button from '../../components/Button';
import CardItem from '../../components/Card';

import datausers from '../../assets/staticUsers/user';

interface PropsExplore {
  swiperFunction: ReactNode;
}

const Explore: React.FC<PropsExplore> = ({swiperFunction}) => {
  const [quantidadeUsers, setQuantidades] = useState(datausers.length)

  const useSwiper = useRef(null).current;

 function handleOnSwipedLeft() {
    //console.log(quantidadeUsers)
    const initial = quantidadeUsers - 1
    setQuantidades(initial)
    console.log(initial)
  }

  function handleOnSwipedLRight() {
    // useSwiper.swipeRight()
    const initial = quantidadeUsers - 1
    setQuantidades(initial)
    console.log(initial)
  }

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Container>

      <CardStack
        verticalSwipe={false}
        ref={useSwiper}
        renderNoMoreCards={() => (
          <View style={{alignItems: "center"}}>
            <Text style={{color: "#fff", fontSize:20}}>Que pena, acabou :(</Text>
          </View>
        )}
        onSwiped={() => console.log('onSwipped')}
        onSwipedLeft={handleOnSwipedLeft}
        onSwipedRight={handleOnSwipedLRight}
        >
        {datausers.map((item, index) => (
          <Card key={index} style={{zIndex: datausers.length - index} }>
            <CardItem
              avatar={item.avatar}
              name={item.name}
              city={item.city}
              uf={item.uf}
              profession={item.profession}
              age={item.age}
              description={item.description}
            />
          </Card>
        ))}
      </CardStack>


      {quantidadeUsers > 0 && (
        <ButtonAction>
          <ButtonDislike onPress={() => {handleOnSwipedLeft}}>
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
