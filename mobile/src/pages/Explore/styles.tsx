import styled, { css } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import normalize from 'react-native-normalize';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #3f3d56;
  padding: 20px;
  justify-content: center;
`;

export const ButtonAction = styled.View`
  flex-direction: row;
  margin-top: 440px;
  align-items: center;
  justify-content: center;
`
export const ButtonLike = styled(RectButton)`
 border-radius: 60px;
 background-color: #2f2e41;
 width: ${wp('24')};
 height: ${hp('12')};
 margin-top: 20px;

 align-items: center;
 justify-content: center;

 margin-left: 50px;
 elevation: 10;
`
export const ButtonDislike = styled(RectButton)`
  border-radius: 60px;
 background-color: #2f2e41;
 width: ${wp('24')};
 height: ${hp('12')};
 margin-top: 20px;
 padding:30px;
 elevation: 10;

 align-items: center;
 justify-content: center;
`