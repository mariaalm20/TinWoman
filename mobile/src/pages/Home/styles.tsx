import React from 'react';
import styled from 'styled-components';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient'


export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #3f3d56;
`;

export const ImageConnection = styled.Image`
  margin-top: ${wp('14')};
`

export const ButtonContainer = styled.View`
    margin-top: ${wp('16')};
`

export const Button = styled.TouchableOpacity`
  margin-top: ${wp('8')};
  width: ${wp('80%')};
  border-radius: 40px;
` 

export const TextButton = styled.Text`
 font: 700 21px Ubuntu;
 color: #ffff;
`

export const BackgroundLinear = styled(LinearGradient).attrs({
  colors:['#FF00AB', '#6263FF'],
  start: {x: 0, y: 0},
  end: {x: 1, y:0}
})`
  width: ${wp('80%')};
  height: ${hp('9')};

  align-items: center;
  justify-content: center;

  border-radius: 50px;
`

export const BorderLinear = styled(LinearGradient).attrs({
  colors:['#FF00AB', '#6263FF'],
  start: {x: 0, y: 0},
  end: {x: 1, y:0}
})`
 border-radius: 40px;
 `

export const ViewGradient = styled.View`
  margin: 2px;
  height: ${hp('9')};
  background-color: #3f3d56;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`
