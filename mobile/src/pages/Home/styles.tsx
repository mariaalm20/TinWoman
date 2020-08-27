import React from 'react';
import styled from 'styled-components/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #3f3d56;
`;

export const ImageConnection = styled.Image`
  margin-top: ${wp('14')};
`;

export const ButtonContainer = styled.View`
  margin-top: ${wp('16')};
`;

export const Button = styled.TouchableOpacity`
  margin-top: ${wp('8')};
  width: ${wp('80%')};
  border-radius: 40px;
`;
