import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const BackgroundLinear = styled(LinearGradient).attrs({
  colors: ['#FF00AB', '#6263FF'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  width: ${wp('90%')};
  height: ${hp('8')};

  align-items: center;
  justify-content: center;

  border-radius: 16px;
  `;

export const TextButton = styled.Text`
  font: 700 21px Ubuntu;
  color: #ffff;
`;

export const BorderLinear = styled(LinearGradient).attrs({
  colors: ['#FF00AB', '#6263FF'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  border-radius: 40px;
`;

export const ViewGradient = styled.View`
  margin: 2px;
  height: ${hp('9')};
  background-color: #3f3d56;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;
