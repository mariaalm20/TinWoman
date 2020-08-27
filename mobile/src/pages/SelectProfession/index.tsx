import React, {useState} from 'react';

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
import normalize from 'react-native-normalize';

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

export interface Props {
  selected: boolean;
}

const SelectProfession: React.FC<Props> = ({selected}) => {
  const [index, setIndex] = useState(0);
  const [profession, setProfession] = useState([
    {id: 0, name: 'Administração'},
    {id: 2, name: 'Doc Hudson'},
    {id: 3, name: 'Cruz Ramirez'},
    {id: 4, name: 'Doc Hudson'},
    {id: 5, name: 'Cruz Ramirez'},
    {id: 6, name: 'Doc Hudson'},
    {id: 7, name: 'Cruz Ramirez'},
    {id: 8, name: 'Doc Hudson'},
    {id: 9, name: 'Cruz Ramirez'},
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const {signOut, signed} = useAuth();
  console.log(signed);

  async function handleSignOut() {
    signOut();
  }

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <Container>
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
                <RectButton onPress={() => handleSelectItem(item.id)}>
                  <ContentProfession
                    key={item.id}
                    style={
                      selectedItems.includes(item.id) ? styles.selectedItem : {}
                    }>
                    <HeaderLinear>
                      <Text></Text>
                    </HeaderLinear>

                    <ContainerInfo>
                      {item.id == 0 || item.id % 2 !== 0 ? (
                        <Image source={purpleSelect} />
                      ) : (
                        <Image source={pinkSelect} />
                      )}
                      <NameProfession>{item.name}</NameProfession>
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
