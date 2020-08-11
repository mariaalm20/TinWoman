

import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  FlatList,
  useWindowDimensions,
} from 'react-native';

import FirstPage from '../SignUpPages/FirstPage';
import SecondPage from '../SignUpPages/SecondPage';
import LastPage from '../SignUpPages/LastPage';

import ButtonGradient from '../Button';

import {Button, Content, ContainerButton} from './styles';


const SignUpCarousel = () => {
  const [flatListRef, setFlatListRef] = useState(null);
  const [index, setIndex] = useState(0);
  const [lista, setLista] = useState([
    {input: ''},
    {input: ''},
    {input: ''},
  ]);
  const scrollX = useRef(new Animated.Value(0)).current;

  const {width: windowWidth} = useWindowDimensions();

  return (
    <Content>
      <SafeAreaView style={styles.container}>
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
              {index  === 0 ? (
                <View>
                  <FirstPage />
               </View>
              ) : (
                index === 1 ? (
                 <View>
                   <SecondPage />
                 </View>
                ) : (
                  <View>
                   <LastPage />
                 </View>
                )
              )}
            </View>
          )}
        />

        <ContainerButton>
          {/*index > 0 && (
            <Button
              onPress={() => {
                if (index > 0) {
                  let newIndex = index - 1;
                  setIndex(newIndex);
                  flatListRef.scrollToIndex({animated: true, index: newIndex});
                }
              }}
              >
                <ButtonGradient isBackgroundLinear textButton="Voltar" isSmall/>
            </Button>
            )*/}

          <Button
            onPress={() => {
              if (index < lista.length - 1) {
                let newIndex = index + 1;
                setIndex(newIndex);
                flatListRef.scrollToIndex({animated: true, index: newIndex});
              }
            }}>
            {index < 2 ? (
                <ButtonGradient isBackgroundLinear textButton="Próximo" isSmall/>
            ) : (
                <ButtonGradient isBackgroundLinear textButton="Finalizar" isSmall/>
            )}
          </Button>
        </ContainerButton>
      </SafeAreaView>
    </Content>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default SignUpCarousel;
