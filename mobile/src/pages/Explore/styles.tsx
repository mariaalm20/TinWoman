import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import {Dimensions} from 'react-native';
const {height} = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #3f3d56;
  padding: 20px;
  justify-content: center;
`;

export const ButtonAction = styled.View`
  flex-direction: row;
  margin-top: ${height * 0.54};
  align-items: center;
  justify-content: center;
`;
export const ButtonLike = styled(RectButton)`
  background-color: #2f2e41;
  width: 104px;
  height: 104px;
  margin-top: 48px;
  border-radius: 52px;

  align-items: center;
  justify-content: center;

  margin-left: 50px;
  elevation: 10;
`;
export const ButtonDislike = styled(RectButton)`
  background-color: #2f2e41;
  width: 104px;
  height: 104px;
  margin-top: 48px;
  padding: 30px;
  elevation: 10;
  border-radius: 52px;

  align-items: center;
  justify-content: center;
`;

export const ContainerEnded = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextEnded = styled.Text`
  color: #fff;
  font-size: 20px;
`;
