import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";

export function HomeScreen({ route, navigation }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");

  const sendRequest = async () => {
    try {
      await fetch("https://webhook.site/ded49f37-e686-4b8b-a66a-b8e0747f4872", {
        method: "post",
        mode: "no-core",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          telefon: telefon,
          email: email,
          password: password,
          passwordAgain: passwordAgain,
          date: date,
          place: place
        }),
      });
      setName("");
      setSurname("");
      setTelefon("");
      setEmail("");
      setPassword("");
      setPasswordAgain("");
      setDate("");
      setPlace("");
    } catch (error) {}
  };

  function handleSettingsPress() {
    navigation.navigate("Settings");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputWrapper}>
        <Text>Unesi ime</Text>
        <TextInput style={styles.input} onChangeText={setName} value={name} />
      </View>

      <View style={styles.inputWrapper}>
        <Text>Unesi prezime</Text>
        <TextInput
          style={styles.input}
          onChangeText={setSurname}
          value={surname}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text>Unesi telefon</Text>
        <TextInput style={styles.input} onChangeText={setTelefon} value={telefon} />
      </View>

      <View style={styles.inputWrapper}>
        <Text>Unesi email</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      </View>

      <View style={styles.inputWrapper}>
        <Text>Unesi lozinku</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        

      </View>
      <View style={styles.inputWrapper}>
        <Text>Unesi ponovno lozinku</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPasswordAgain}
          value={passwordAgain}
          secureTextEntry={true}
        />
        

        
      </View>

      <View style={styles.inputWrapper}>
        <Text>Unesi datum rođenja</Text>
        <TextInput style={styles.input} onChangeText={setDate} value={date} />
      </View>

      <View style={styles.inputWrapper}>
        <Text>Unesi mjesto rođenja</Text>
        <TextInput style={styles.input} onChangeText={setPlace} value={place} />
      </View>

      <Button title="Send request" onPress={sendRequest} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
  },
  inputWrapper: {
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});