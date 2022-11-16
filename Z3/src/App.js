import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
        </View>
        <View style={styles.center}>
          <Text style={styles.name}>Anja Labak</Text>
          <Text style={styles.info}>Telefon: +385 55 5555 5555 </Text>
          <Text style={styles.info}>E-mail: alabak@ffos.hr</Text>
          <Text style={styles.info}>GitHub: alabak48</Text>
        </View>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.skill}>OBRAZOVANJE</Text>
            <Text style={styles.txt}>
              Studentica dvopredmetnog diplomskog studija informatologije i informacijskih
              tehnologija
            </Text>
        <Text style={styles.underTxt}>10/2021 - DANAS</Text>

        <Text style={styles.txt}>
          Sveučilišna prvostupnica informatologije
        </Text>
        <Text style={styles.underTxt}>07/2018 - 09/2021 </Text>

        <Text style={styles.txt}>Ekonomska i upravna škola Osijek</Text>
        <Text style={styles.underTxt}>7/2014 - 7/2018 </Text>
      </View>
    

      <View style={styles.paragraph}>
        <Text style={styles.skill}>RADNO ISKUSTVO</Text>
        <Text style={styles.txt}>Frontend Developer / JetBrains Academy</Text>
        <Text style={styles.underTxt}>2021 - DANAS</Text>
      </View>

          <View style={styles.paragraph}>
        <Text style={styles.skill}>VJEŠTINE</Text>
        <Text style={styles.txt}>HTML</Text>
        <Text style={styles.txt}>CSS</Text>
        <Text style={styles.txt}>JavaScript</Text>
        <Text style={styles.underTxt}></Text>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 10,
    fontFamily: ' Arial',
  },
    skill: {
    backgroundColor: '#E6EEF7',
      fontSize: 15,
      fontWeight: '700',
  },
  name: {
    paddingTop: Constants.statusBarHeight,
    fontSize: 25,
    fontWeight: '700',
  },
  header: {
    margin: 10,
    flexDirection: 'row',
  },
  paragraph: {
    marginLeft: 15,
  },
  info: {
    marginTop: 5,
    marginLeft: 2,
    fontSize: 17,
    fontFamily: 'Arial',
  },
  txt: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 2,
    marginTop: 12,
    marginBottom: 5,
  },
  underTxt: {
    fontSize: 12,
    marginLeft: 14,
  },
});