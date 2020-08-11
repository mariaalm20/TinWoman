import React, {useState, ReactNode} from 'react';


import {Input, ContainerInput, ContentInput, FeatherIcon} from './styles';


interface Page {
  next?: ReactNode;
}
const FirstPage: React.FC<Page> = ({next}) => {
  return (
    <ContainerInput>
      <ContentInput>
        <FeatherIcon name="user" size={20}/>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Nome"
          returnKeyType="next"
        />
      </ContentInput>

      <ContentInput>
        <FeatherIcon name="mail" size={20}/>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email"
          returnKeyType="next"
        />
      </ContentInput>

      <ContentInput>
        <FeatherIcon name="lock" size={20}/>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="password"
          placeholder="Senha"
          returnKeyType="next"
        />
      </ContentInput>

    </ContainerInput>
  );
};

export default FirstPage;
