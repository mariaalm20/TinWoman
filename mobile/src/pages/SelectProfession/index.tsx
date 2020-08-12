import React from 'react';

import {View, Text} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';

import {useAuth} from '../../services/Auth/auth';
import normalize from 'react-native-normalize';

export default function SelectProfession() {
  const {signOut, signed} = useAuth();
  console.log(signed);

  async function handleSignOut() {
    signOut();
  }

  return (
    <View>
      <RectButton
        onPress={handleSignOut}
        style={{
          backgroundColor: '#F95F62',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: normalize(10),
          marginTop: normalize(20),
          marginBottom: normalize(20),
        }}
      >
        <Text>Clique</Text>
      </RectButton>
    </View>
  );
}
