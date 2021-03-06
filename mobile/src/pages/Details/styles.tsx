import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RectButton} from 'react-native-gesture-handler';

import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #3f3d56;
  padding: 20px;
`;

export const Content = styled.View`
  background-color: #2f2e41;
  border-radius: 20;
  elevation: 10;
`;

export const HeaderLinear = styled(LinearGradient).attrs({
  colors: ['#FF00AB', '#6263FF'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  height: ${height * 0.04};
`;

export const Separator = styled.Image`
  margin-top: 20px;
`;

export const ContainerInfo = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Avatar = styled.Image`
  width: ${width * 0.34};
  height: ${height * 0.17};
  border-radius: 100px;
`;

export const ContainerPicture = styled(LinearGradient).attrs({
  colors: ['#FF00AB', '#6263FF'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  border-radius: 100px;

  width: ${width * 0.4};
  height: ${height * 0.19};

  align-items: center;
  justify-content: center;

  margin-left: 40px;
`;

export const ViewGradient = styled.View`
  margin: 2px;
  width: ${wp('38')};
  height: ${hp('19')};
  background-color: #2f2e41;
  padding: 20px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #e6e6e6;
  font-weight: bold;
  margin-top: 8px;
`;

export const Profession = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  color: #ff00ab;
`;
export const ContainerGroup = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;
export const Age = styled.Text`
  font-size: 14px;
  color: #e6e6e6;
`;
export const Address = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  color: #e6e6e6;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #e6e6e6;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonGmail = styled(RectButton)`
  margin-right: 16px;
`;
export const ButtonLinkedIn = styled(RectButton)`
  margin-right: 16px;
`;
export const ButtonFace = styled(RectButton)``;
export const ButtonInsta = styled(RectButton)`
  margin-right: 16px;
`;

export const IconSocial = styled.Image`
  width: 40px;
  height: 40px;
`;
