import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import LinearGradient from 'react-native-linear-gradient';

export const ContainerInput = styled.View`
  padding: 40px;
  height: ${hp('50%')};
  width: ${wp('100%')};
  border-top-right-radius: 120px;
  align-items: center;
`;

export const Icon = styled(FontAwesome)`
  color: #c4c4c4;
`;

export const TitleContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #999;
  font-weight: bold;
  margin-left: 10px;
`;

export const ContainerPicture = styled(LinearGradient).attrs({
  colors: ['#FF00AB', '#6263FF'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  border-radius: 100px;
  margin-top: 20px;

  width: ${wp(50)};
  height: ${hp(25)};

  align-items: center;
  justify-content: center;
`;

export const ViewGradient = styled.View`
  margin: 2px;
  width: ${wp('48')};
  height: ${hp('24')};
  background-color: #ffff;
  padding: 20px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;


export const Photo = styled.Image`
  width:  ${wp('40')};
  height: ${hp('20')};
  border-radius: 80px;
`;