import React, {useState, useRef, useEffect} from 'react';

import {
  ContainerInput,
  InputGroup,
  Button,
  Select,
  Label,
  ContentInput,
} from './styles';

import {View, Picker} from 'react-native';
import ButtonGradient from '../../Button';
import axios from 'axios';

import normalize from 'react-native-normalize';
import {Input} from 'react-native-elements';
import {Formik} from 'formik';
import Feather from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-community/async-storage';

export interface PropsGroup {
  isGroup?: boolean;
}

interface IBGEUfResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

interface SignUp {
  age: string;
  profession: string;
  selectedUf: string;
  selectedCity: string;
}

const SignInValidationSchema = Yup.object().shape({
  age: Yup.number().required('Campo obrigatório!'),
  profession: Yup.string().required('Campo obrigatório!'),
});

const SecondPage: React.FC<PropsGroup> = (props) => {
  const inputAgeRef = useRef<Input>(null);
  const inputProfessionRef = useRef<Input>(null);

  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState('0');

  const [age, setAge] = useState('')
  const [profession, setProfession] = useState('')


  const [ufs, setUfs] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('0')


  // const [user, setUser] = useState<SignUp[]>([]);


  useEffect(() => {
    axios
      .get<IBGEUfResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then((response) => {
        const ufinitials = response.data.map((uf) => uf.sigla);
        setUfs(ufinitials);
      });
  }, [ufs]);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios
      .get<IBGEUfResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados`,
      )
      .then((response) => {
        const ufinitials = response.data.map((uf) => uf.sigla);
        setUfs(ufinitials);
      });
  }, [selectedUf]);

  useEffect(() => {
    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);
        setCities(cityNames);
      });
  }, [selectedUf, ufs])


  async function handleSignUp() {
    const informations = [{age, profession, selectedCity, selectedUf}]
    // setUser(informations)
    console.log(props.user)

    await AsyncStorage.setItem("usersecond", JSON.stringify(props.user))
  }

  useEffect(() => {
    console.log(props.user)
    handleSignUp()
  }, [selectedCity])

  return (
    <ContainerInput>
          <View>
            <Input
              label="Idade"
              placeholder="18"
              placeholderTextColor="#999"
              autoCapitalize="words"
              keyboardType="numeric"
              autoCorrect={false}
              returnKeyType="next"
              blurOnSubmit={false}
              errorStyle={{color: '#FB0404', fontSize: normalize(14)}}
              ref={inputAgeRef}
              onSubmitEditing={() => inputAgeRef.current?.focus()}
              value={age}
              onChangeText={(text: string) => setAge(text)}
            />

            <Input
              leftIcon={<Feather name="briefcase" size={24} color="#c4c4cc" />}
              leftIconContainerStyle={{
                marginLeft: normalize(0),
                marginRight: normalize(10),
              }}
              label="Profissão"
              placeholder="Administração"
              placeholderTextColor="#999"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              blurOnSubmit={false}
              errorStyle={{color: '#FB0404', fontSize: normalize(14)}}
              ref={inputProfessionRef}
              onSubmitEditing={() => inputProfessionRef.current?.focus()}
              value={profession}
              onChangeText={(text: string) => setProfession(text)}
            />


            <InputGroup>

            <ContentInput>
              <Label>UF</Label>
              <Select
                selectedValue={selectedUf}
                onValueChange={(index) => setSelectedUf(index)}>
                <Select.Item label={'Sekecione'} value="" />
                {ufs.map((uf) => {
                  return <Select.Item key={uf} label={uf} value={uf} />;
                })}
              </Select>
            </ContentInput>

            <ContentInput>
              <Label>Cidade</Label>
              <Select
                selectedValue={selectedCity}
                onValueChange={(text) => setSelectedCity(text)}>
                <Select.Item label={'Selecione'} value="" />
                {cities.map((city) => {
                  return <Select.Item key={city} label={city} value={city} />;
                })}
              </Select>
            </ContentInput>

            </InputGroup>

            {/* <Button onPress={() => handleSubmit()}>
              <ButtonGradient isBackgroundLinear textButton="Entrar" />
            </Button>*/}
          </View>
    </ContainerInput>
  );
};

export default SecondPage;
