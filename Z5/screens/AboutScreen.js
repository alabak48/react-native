import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export function AboutScreen({ route, navigation }) {

function handleHomePress(){
  navigation.navigate("Home")
}

  return (
    <View style={styles.screen}>
      <Text>About us</Text>
      

    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  }
});
