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
  isSmall?:boolean
}

const Button: React.FC<PropsButton> = ({isBackgroundLinear, textButton, isSmall}) => {
  return (
    <View>
      {isBackgroundLinear ? (
          <BackgroundLinear className ={isSmall ? 'active' : ''}>
             <TextButton>{textButton}</TextButton>
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
