import React from 'react';
import styled from 'styled-components';
import Feather from 'react-native-vector-icons/Feather'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';




export const ContainerInput = styled.View`
  height: ${hp('50%')};
  width: ${wp('100%')};
  border-top-right-radius: 120px;
  align-items: center;
`;

export const ContentInput = styled.View`
  width: ${wp('80%')};
  height: ${hp('8')};

  border-radius: 60px;
  border-style: solid;
  border-width: 1px;
  border-color: #e6e6e6;

  margin-top: ${wp('4')};
  
  padding: 20px;
  flex-direction: row;
  align-items: center;
  
`

export const FeatherIcon = styled(Feather)`
  margin-right: 16px;
  color: #c4c4c4;
`

export const Input = styled.TextInput`
  height: ${hp('8')};

`;

export const Button = styled.TouchableOpacity`
  margin-top: ${wp('8')};
  width: ${wp('80%')};
  border-radius: 40px;
`;

