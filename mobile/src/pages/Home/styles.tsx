import styled from 'styled-components/native';

import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #3f3d56;
`;

export const ImageConnection = styled.Image`
  margin-top: ${height * 0.1};
`;

export const ButtonContainer = styled.View`
  margin-top: ${height * 0.08};
`;

export const Button = styled.TouchableOpacity`
  margin-top: ${height * 0.03};
  width: ${width * 0.8};
  border-radius: 40px;
`;
