import React from 'react';

import {
  BackgroundLinear,
  TextButton,
  BorderLinear,
  ViewGradient,
} from './styles';
import {View} from 'react-native';

export interface PropsButton {
  isBackgroundLinear?: boolean;
  textButton: string;
  isSmall?: boolean;
  width?: string;
  height?: string;
  fontSize?: number;
  borderRadius?: number;
}

import {RectButton} from 'react-native-gesture-handler';

const Button: React.FC<PropsButton> = ({
  isBackgroundLinear,
  textButton,
  fontSize,
  width,
  height,
  borderRadius,
}) => {
  return (
    <View>
      {isBackgroundLinear ? (
        <BackgroundLinear
          width={width}
          height={height}
          borderRadius={borderRadius}>
          <TextButton fontSize={fontSize}>{textButton}</TextButton>
        </BackgroundLinear>
      ) : (
        <BorderLinear>
          <ViewGradient>
            <TextButton>{textButton}</TextButton>
          </ViewGradient>
        </BorderLinear>
      )}
    </View>
  );
};

export default Button;
