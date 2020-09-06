import React, {useState, useRef} from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';

import {Input} from 'react-native-elements';
import {Formik} from 'formik';
import Feather from 'react-native-vector-icons/Feather';
import {
  Container,
  Title,
  Content,
  Logo,
  Button,
  ForgotPassword,
  ContainerInput,
} from './styles';

import logo from '../../assets/logoChat.png';

import {useAuth} from '../../services/Auth/auth';
import Toast from 'react-native-easy-toast';
import * as Yup from 'yup';

import normalize from 'react-native-normalize';

import ButtonGradient from '../../components/Button';

export interface PropsFocus {
  isFocused: boolean;
}

interface SignIn {
  email: string;
  password: string;
}

const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido!').required('Campo obrigatório!'),
  password: Yup.string().required('Campo obrigatório!'),
});

const SignIn: React.FC<PropsFocus> = ({isFocused}) => {
  const [loading, setLoading] = useState(false);

  const toastRef = useRef<Toast>(null);
  const inputEmailRef = useRef<Input>(null);
  const inputPasswordRef = useRef<Input>(null);
  const initialValues: SignIn = {email: '', password: ''};

  const {signIn, signed} = useAuth();
  console.log(signed);

  async function handleSignIn(formValues: SignIn) {
    try {
      setLoading(true);

      await signIn(formValues.email, formValues.password);
    } catch (error) {
      setLoading(false);
      toastRef.current?.show('Email ou senha inválidos, tente novamente!');
    }
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <Container>
        <Logo source={logo} />

        <Title>Conectar</Title>

        <Content>
          <ContainerInput>
            <Formik
              initialValues={initialValues}
              validationSchema={SignInValidationSchema}
              onSubmit={(values) => handleSignIn(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View>
                  <Input
                    leftIcon={<Feather name="mail" size={24} color="#c4c4cc" />}
                    leftIconContainerStyle={{
                      marginLeft: normalize(0),
                      marginRight: normalize(10),
                    }}
                    label="Email"
                    placeholder="maria@gmail.com"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    errorStyle={{color: '#FB0404', fontSize: normalize(14)}}
                    errorMessage={errors.email}
                    ref={inputEmailRef}
                    onSubmitEditing={() => inputPasswordRef.current?.focus()}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  {touched.email &&
                    errors.email &&
                    inputEmailRef.current?.shake()}

                  <Input
                    leftIcon={<Feather name="lock" size={24} color="#c4c4c4" />}
                    leftIconContainerStyle={{
                      marginLeft: normalize(0),
                      marginRight: normalize(10),
                    }}
                    label="Senha"
                    placeholder="******"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="send"
                    errorStyle={{color: '#FB0404', fontSize: normalize(14)}}
                    errorMessage={errors.password}
                    ref={inputPasswordRef}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    onSubmitEditing={() => handleSubmit()}
                  />
                  {touched.password &&
                    errors.password &&
                    inputPasswordRef.current?.shake()}

                  <Button onPress={() => handleSubmit()}>
                    <ButtonGradient isBackgroundLinear textButton="Entrar" />
                  </Button>
                </View>
              )}
            </Formik>
          </ContainerInput>

          <ForgotPassword>Esqueci a Senha</ForgotPassword>
        </Content>
      </Container>
      <Toast ref={toastRef} /*style={{backgroundColor: 'red'}}*/ />
    </KeyboardAvoidingView>
  );
};

export default SignIn;