import styled, {css} from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import normalize from 'react-native-normalize';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  background-color: #3f3d56;
  padding: 20px;
`;

export const ContentProfession = styled.View`
  background-color: #2f2e41;
  width: ${wp(40)};
  height: ${hp(20)};
  border-radius: 20;
  elevation: 10;
`;

export const ContainerInfo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const NameProfession = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;

  margin-top: 20px;
`;

export const HeaderLinear = styled(LinearGradient).attrs({
  colors: ['#FF00AB', '#6263FF'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  position: relative;
`;
