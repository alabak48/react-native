import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export function ContactScreen({ route, navigation }) {

function handleHomePress(){
  navigation.navigate("Home")
}

  return (
    <View style={styles.screen}>
    
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
