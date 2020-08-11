import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ContainerInput = styled.View`
  margin-top: 10px;
  height: ${hp('50%')};
  width: ${wp('100%')};
  border-top-right-radius: 120px;
  align-items: center;
`;

export const Icon = styled(FontAwesome)`
  color: #c4c4c4;
`;

export const Input = styled.TextInput`
  width: ${wp('80%')};
  height: ${hp('12')};

  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #e6e6e6;

  padding: -60px 10px;
  margin-top: ${wp('4')};
`;


export const ContainerPicture = styled.View`
    width: ${wp(44)};
    height: ${hp(25)};

    border-style: solid;
    border-width: 6px;
    border-color: #eee;
    border-radius: 130px;
    
    align-items: center;
    justify-content: center;
`


