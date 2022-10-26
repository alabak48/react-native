import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    // View, text Component
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Test app</Text>
      </View>

      {/* Flexbox layout */}
      <View style={styles.jumbotron}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Left</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Right</Text>
        </View>
      </View>

      {/* Image component */}
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Image style={styles.tinyLogo} source={require("./assets/favicon.png")} />

      {/* button component */}
      <Button title="Button" onPress={() => Alert.alert("Button pressed")} />

      {/* touchable opacity component */}
      <TouchableOpacity
        style={styles.resolvedContainerStyle}
        onPress={() => Alert.alert("TouchableOpacity pressed")}
      >
        <Text style={styles.textStyle}>Touchable opacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#4eb168",
  },
  header: {
    borderBottomWidth: 2,
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
  jumbotron: {
    flexDirection: "row",
    margin: 20,
  },
  tinyLogo: {
    margin: 10,
    width: 100,
    height: 100,
  },
  resolvedContainerStyle: {
    margin: 20,
    backgroundColor: "white",
    padding: 20,
  },
  textStyle: {
    fontSize: 20,
    color: "black",
  },
});
