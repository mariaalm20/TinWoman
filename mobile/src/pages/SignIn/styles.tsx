import styled, {css} from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import normalize from 'react-native-normalize';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {PropsFocus} from './index';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #3f3d56;
  padding: 20px;
`;

export const Logo = styled.Image`
  margin-top: ${wp('20')};
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;

  margin-top: ${wp('16')};
  align-self: flex-start;
`;

export const Content = styled.View`
  background-color: #fff;
  height: ${hp('50%')};
  width: ${wp('100%')};
  margin-top: ${wp('20')};
  border-top-right-radius: 120px;
  align-items: center;
  justify-content: center;
`;

export const ContainerInput = styled.View`
  align-self: stretch;
  padding: 20px;
`;

export const FeatherIcon = styled(Feather)`
  margin-right: 10px;
  color: #c4c4c4;
`;

export const Input = styled.TextInput`
  height: ${hp('8')};
`;

export const Button = styled.TouchableOpacity`
  margin-top: ${wp('6')};
  justify-content: center;
  align-items: center;
`;

export const ForgotPassword = styled.Text`
  color: #8d8c92;
  font-size: 16px;
  margin-top: 8px;
`;
