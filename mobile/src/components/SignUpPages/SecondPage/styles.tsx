import React from 'react';
import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {PropsGroup} from './index';

export const ContainerInput = styled.View`
  align-self: stretch;
  padding: 20px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  margin-top: ${wp('16')};
  justify-content: center;
  align-items: center;
`;


export const ContentSelect = styled.View`
  height: ${hp('8')};
  margin-top: ${wp('4')};
  border-color: #000;
  border-style: solid;
  border-bottom-width: 10px;
`

export const ContentInput = styled.View`
  height: 60px;
  background-color: #FFF;
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const Select = styled.Picker`
  width: ${wp('38%')};
  height: ${hp('8')};
  color: grey;
  margin-left: 10px;
  border-color: #c4c4c4;
  border-style: solid;
  border-bottom-width: 20px;
`
export const Label = styled.Text`
  margin-left: ${wp('3')};
  font-size: 16px;
  font-weight: bold;
  color: #999;
`