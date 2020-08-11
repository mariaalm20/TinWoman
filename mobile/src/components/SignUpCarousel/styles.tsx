import React from 'react';
import styled from 'styled-components';
import Fontisto from 'react-native-vector-icons/Fontisto'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useWindowDimensions} from 'react-native'



export const Content = styled.View`
  background-color: #fff;
  height: ${hp('50%')};
  width: ${wp('100%')};
  margin-top: ${wp('20')};
  border-top-right-radius: 120px;
  align-items: center;
  justify-content: center;
`;


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
  margin-top: ${wp('4')};
`;

export const Button = styled.TouchableOpacity`
`;


export const ContainerButton = styled.View`
    margin-bottom: ${wp('10')};
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`


