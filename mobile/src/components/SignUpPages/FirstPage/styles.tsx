import React from 'react';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ContainerInput = styled.View`
  align-self: stretch;
  padding: 20px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;


export const ContainerButton = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
