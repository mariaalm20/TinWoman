import React, {useState, ReactNode} from 'react';

import {
  Input,
  ContainerInput,
  InputGroup,
  ContentInput,
  Icon,
  Select,
  ContentSelect,
} from './styles';

import {Image} from 'react-native';

export interface PropsGroup {
  isGroup?: boolean;
}
const SecondPage: React.FC<PropsGroup> = ({isGroup}) => {
  return (
    <ContainerInput>
      <ContentInput>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="text"
          placeholder="Idade"
          returnKeyType="next"
        />
      </ContentInput>

      <ContentInput>
        <Icon name="briefcase" size={20} />
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="text"
          placeholder="Profissão"
          returnKeyType="next"
        />
      </ContentInput>

      <InputGroup>
        <ContentSelect>
          <Select isGroup>
            <Select.Item label="UF" value="" />
          </Select>
        </ContentSelect>
        
        <ContentSelect>
          <Select isGroup>
            <Select.Item label="Cidade" value="" />
          </Select>
        </ContentSelect>
      </InputGroup>
    </ContainerInput>
  );
};

export default SecondPage;
