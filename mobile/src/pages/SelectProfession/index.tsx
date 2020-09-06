import React, {useState, useEffect} from 'react';

import {
  View,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import {useAuth} from '../../services/Auth/auth';
import {useNavigation} from '@react-navigation/native';
import normalize from 'react-native-normalize';

import Feather from 'react-native-vector-icons/Feather';

import {
  Container,
  ContentProfession,
  NameProfession,
  HeaderLinear,
  ContainerInfo,
} from './styles';

import pinkSelect from '../../assets/pinkSelect.png';
import purpleSelect from '../../assets/purpleSelect.png';
import {RectButton} from 'react-native-gesture-handler';
import api from '../../services/api';
//import {User} from '../../models/user';

export interface Props {
  selected: boolean;
  profession: string;
}

export interface Profession {
  _id: number;
  profession: string;
}

const SelectProfession: React.FC<Props> = () => {
  // const [index, setIndex] = useState(0);
  //const [users, setUsers] = useState
  const [loading, setLoading] = useState(true);
  const [profession, setProfession] = useState<Profession[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const navigation = useNavigation();

  const {signOut, signed} = useAuth();
  console.log(signed);

  useEffect(() => {
    async function loadProfession() {
      const response = await api.get('/profession');
      console.log(response.data);

      setProfession(response.data);
      setLoading(false);
    }

    loadProfession();
  }, []);

  /*async function handleSignOut() {
    signOut();
  }*/

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  function handleNavigateToExplore() {
    navigation.navigate('Explore', {
      selectedItems,
    });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <Container>
        <RectButton onPress={handleNavigateToExplore}>
          <Feather name="arrow-right" size={60} />
        </RectButton>
        <FlatList
          data={profession}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          nestedScrollEnabled
          renderItem={({item}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  padding: normalize(12),
                }}>
                <RectButton onPress={() => handleSelectItem(item._id)}>
                  <ContentProfession
                    key={item._id}
                    style={
                      selectedItems.includes(item._id)
                        ? styles.selectedItem
                        : {}
                    }>
                    <HeaderLinear>
                      <Text />
                    </HeaderLinear>

                    <ContainerInfo>
                      {item._id === 0 || item._id % 2 !== 0 ? (
                        <Image source={purpleSelect} />
                      ) : (
                        <Image source={pinkSelect} />
                      )}
                      <NameProfession>{item.profession}</NameProfession>
                    </ContainerInfo>
                  </ContentProfession>
                </RectButton>
              </View>
            );
          }}
        />
      </Container>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  selectedItem: {
    borderColor: '#ff00ab',
    borderWidth: 2,
  },
});

export default SelectProfession;
