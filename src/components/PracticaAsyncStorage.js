import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button } from 'react-native';

const PracticaAsyncStorage = () => {
  const [text, setText] = useState('');
  
  const saveName = async () => {
    try {
      AsyncStorage.setItem('namesData', text);
    } catch (error) {}
  };

  const getName = async () => {
    try {
      const name = await AsyncStorage.getItem('namesData');
      setText(name);
    } catch (error) {}
  };

  const deleteName = async () => {
    AsyncStorage.removeItem('namesData');
    setText('');
  };

  useEffect(() => {
    getName();
  }, []);
 
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            placeholder='Ingresa tu nombre'
            onChangeText={value => setText(value)}/>
        </View>
        <View>
          <Text style={styles.nameText}>Nombre: {text}</Text>
          <Button title='Guardar nombre' onPress={saveName}/>
          <Button title='Borrar nombre' onPress={deleteName}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 20
  },
  inputView: {
    height: 50,
    borderColor: 'blue',
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  nameText: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20,
    fontWeight: 'bold'
  },
});

export default PracticaAsyncStorage;