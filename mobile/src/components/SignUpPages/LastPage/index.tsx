import React, {useState, useEffect} from 'react';

import {View, Text} from 'react-native';

import {ContainerInput, Finally, Icon, TextFinally, SugestionTitle} from './styles';

import ButtonGradient from '../../Button';

import normalize from 'react-native-normalize';
import {Input} from 'react-native-elements';
import {Formik} from 'formik';
import Feather from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';

import AsyncStorage from '@react-native-community/async-storage'


interface SignUpLast {
  description: string;
}

export default function LastPage() {
  const [description, setDescription] = useState('')
  const [user, setUser] = useState<SignUpLast>()

  async function handleSignUp() {
    const information = {description}
    setUser(information)
    console.log(user)

    await AsyncStorage.setItem("user", JSON.stringify(user))
  }

  useEffect(() => {
    handleSignUp()
  }, [description])

  return (
    <ContainerInput>
      <Finally>
        <Icon name="party-popper" size={24} />
        <TextFinally>Finalmente!</TextFinally>
      </Finally>

    <SugestionTitle>Sugestão: Diga o que faz, objetivos na plataforma, hobbies etc...</SugestionTitle>

          <View style={{marginTop: 40}}>
            <Input
              label="Descrição"
              placeholder="Escreva algo sobre você..."
              placeholderTextColor="#999"
              multiline={true}
              autoCapitalize="words"
              autoCorrect={true}
              returnKeyType="next"
              blurOnSubmit={false}
              errorStyle={{color: '#FB0404', fontSize: normalize(14)}}
              //errorMessage={errors.age}
              value={description}
              onChangeText={(text: string) => setDescription(text)}
            />
          </View>

    </ContainerInput>
  );
}
