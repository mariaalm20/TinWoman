import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

/*import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');*/

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #3f3d56;
  padding: 20px;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Separator = styled.Image``;

export const ContainerGroup = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const ButtonLinking = styled(RectButton)`
  background-color: #2f2e41;
  width: 60px;
  height: 60px;
  elevation: 10;
  border-radius: 52px;

  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;
export const ButtonLinkedIn = styled(RectButton)`
  margin-right: 16px;
`;
export const ButtonFace = styled(RectButton)``;
export const ButtonInsta = styled(RectButton)`
  margin-right: 16px;
`;

export const ButtonToExplore = styled(RectButton)`
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const IconSocial = styled.Image`
  width: 40px;
  height: 40px;
`;
