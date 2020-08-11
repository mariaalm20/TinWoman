import React from 'react';
import styled from 'styled-components';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {PropsGroup} from './index';

export const ContainerInput = styled.View`
  height: ${hp('50%')};
  width: ${wp('100%')};
  border-top-right-radius: 120px;
  align-items: center;
`;

export const InputGroup = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ContentSelect = styled.View`
  border-radius: 60px;
  border-style: solid;
  border-width: 1px;
  border-color: #e6e6e6;

  height: ${hp('8')};
  margin-top: ${wp('4')};

  align-items: center;
  justify-content:center;

  margin-left: 10px;
`

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
  color: #c4c4c4;
`;

export const Input = styled.TextInput`
  width: ${(props: PropsGroup) => (props.isGroup ? '40%' : '80%')};

  height: ${hp('8')};
`;

export const ContentInput = styled.View`
  width: ${wp('80%')};
  height: ${hp('8')};

  border-radius: 60px;
  border-style: solid;
  border-width: 1px;
  border-color: #e6e6e6;

  margin-top: ${wp('6')};

  padding: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Select = styled.Picker`
  width: ${wp('38%')};
  height: ${hp('8')};
  margin-left: 10px;
`
