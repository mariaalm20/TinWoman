import React, {useState, useEffect} from 'react';

import {TouchableOpacity, Image} from 'react-native';

import {ContainerInput, ContainerPicture, Icon, ViewGradient, TitleContainer, Title, Photo} from './styles';
import ImagePicker  from  'react-native-image-picker' ;
import AsyncStorage from '@react-native-community/async-storage'

import ButtonGradient from '../../Button'
import { Avatar } from 'react-native-elements';

interface SignUp {
  avatar: string;
}

export default function PicturePage() {
  const [avatar, setAvatar] = useState<string|undefined>(undefined);
  const [user, setUser] = useState<SignUp>()
  
  function handleSelectImage(){
    const options = {
      title: 'Selecione uma foto',
      storageOptions: {
        skipBackup: true,
      path: 'images',
    },
  };
  
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
    
        setAvatar(response.uri)
        //console.log(avatar)
      }
    })
  }

  async function handleSignUp() {
    const information = {avatar}
    setUser(information)
    console.log(user)

    await AsyncStorage.setItem("user", JSON.stringify(user))
  }

  useEffect(() => {
    handleSignUp()
  }, [avatar])
  

  return (
    <ContainerInput>
      <TitleContainer>
        <Icon name="picture-o" size={24} />
        <Title>Selecione uma foto</Title>
      </TitleContainer>

      <TouchableOpacity onPress={handleSelectImage}>
        <ContainerPicture>
          <ViewGradient>
            {!avatar ? (
               <Icon name="user-circle" size={130} />
            ) : (
              <Photo source={{uri:avatar}}/>
            )}
         
          </ViewGradient>
        </ContainerPicture>
      </TouchableOpacity>

    </ContainerInput>
  );
}
