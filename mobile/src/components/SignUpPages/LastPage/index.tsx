import React, {useState} from 'react';

import {TextInput, Text} from 'react-native';

import {Input, ContainerInput, ContainerPicture, Icon} from './styles';

export default function LastPage() {
  return (
    <ContainerInput>
      <ContainerPicture>
        <Icon name="user-circle" size={130}/>
      </ContainerPicture>

      <Text>Selecione uma foto da sua galeria</Text>

     {/* <Input
        multiline={true}
        numberOfLines={4}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Faça um pequeno resumo sobre você..."
        returnKeyType="next"
     />*/}
    </ContainerInput>
  );
}
