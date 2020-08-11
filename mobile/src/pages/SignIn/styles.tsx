import React from 'react';
import styled from 'styled-components';
import Fontisto from 'react-native-vector-icons/Fontisto'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
  font-size: 40px;
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const FontistoIcon = styled(Fontisto)`
 padding-right: -90px;
`

export const Input = styled.TextInput`
  width: ${wp('80%')};
  height: ${hp('8')};

  border-radius: 60px;
  border-style: solid;
  border-width: 1px;
  border-color: #e6e6e6;
  
  padding: 20px;
  margin-top: ${wp('8')};
`;

export const Button = styled.TouchableOpacity`
  margin-top: ${wp('8')};
  width: ${wp('80%')};
  border-radius: 40px;
`;

export const ForgotPassword = styled.Text`
  color: #8d8c92;
  font-size: 16px;
  margin-top: 8px;
`;
