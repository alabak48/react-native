import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';

export function SettingsScreen({ route, navigation }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendRequest = async () => {
    try {
      await fetch('https://webhook.site/774ba04d-6ec6-4d46-bc3d-5435ffdbe477', {
        method: 'post',
        mode: 'no-core',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          password: password,
        }),
      });
      setName('');
      setSurname('');
      setEmail('');
      setPassword('');
    } catch (error) {}
  };

  function handleSettingsPress() {
    navigation.navigate('Settings');
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Ime" />
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={setSurname}
          value={surname}
          placeholder="Prezime"
        />
      </View>

      <View style={styles.inputWrapper}>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="E-mail" />
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Šifra"
        />
      </View>

      <Button title="Send request" onPress={sendRequest} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputWrapper: {
    alignItems: 'center',
  },
  input: {
    height: 25,
    width: 200,
    margin: 12,
    borderRadius: 10,
    padding: 20,
    borderColor: "#595959",
    borderWidth: 2
  }
});