import React from 'react';
import styled from 'styled-components/native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export const Content = styled.View`
  background-color: #fff;
  height: ${hp('50%')};
  width: ${wp('100%')};
  margin-top: ${wp('20')};
  border-top-right-radius: 120px;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled.View`
  margin-bottom: ${wp('6')};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
