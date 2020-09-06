import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ContainerInput = styled.View`
  align-self: stretch;
  padding: 20px;
`;

export const Finally = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left: ${wp('16')};
`;

export const Icon = styled(FontAwesome)`
  color: #6263ff;
  margin-right: 16px;
`;

export const TextFinally = styled.Text`
  font-size: 24px;
  color: #6263ff;
  font-weight: bold;
`;


export const SugestionTitle = styled.Text`
  font-size: 16px;
  margin-top: 20px;
  margin-left: 10px;
  color: #c4c4c4;
`;
