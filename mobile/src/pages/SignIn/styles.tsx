import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #3f3d56;
  padding: 20px;
`;

export const Logo = styled.Image`
  margin-top: ${width * 0.2};
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;

  margin-top: ${width * 0.16};
  align-self: flex-start;
`;

export const Content = styled.View`
  background-color: #fff;
  height: ${height * 0.48};
  width: ${width};
  margin-top: ${height * 0.08};
  border-top-right-radius: 120px;
  align-items: center;
  justify-content: center;
`;

export const ContainerInput = styled.View`
  align-self: stretch;
  padding: 20px;
`;

export const FeatherIcon = styled(Feather)`
  margin-right: ${width * 0.1};
  color: #c4c4c4;
`;

export const Input = styled.TextInput`
  height: ${height * 0.8};
`;

export const Button = styled.TouchableOpacity`
  margin-top: ${width * 0.06};
  justify-content: center;
  align-items: center;
`;

export const ForgotPassword = styled.Text`
  color: #8d8c92;
  font-size: 16px;
  margin-top: 5px;
`;
