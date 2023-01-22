import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TextInput
} from 'react-native';
import CommentInput from '../components/CommentInput';
import CommentItem from '../components/CommentItem';
import { Fontisto } from '@expo/vector-icons';

export function HomeScreen({ route, navigation }) {
  //deklaracija state varjable
  const [comment, setComment] = useState([]);

  //uzima vrijednost koju smo unijeli u textInput i dodaje istu u niz, dodjeljuje id (generirani) i value (vrijednost koju upišemo u textInput)
  const addCommentHandler = (commentTitle) => {
    setComment((currentComment) => [
      ...currentComment,
      { id: Math.random().toString(), value: commentTitle },
    ]);
  };

  //uzima id vrijednosti na koju smo kliknuli i briše tu vrijednost iz niza
  const removeCommentHandler = (commentId) => {
    setComment((currentComment) => {
      return currentComment.filter((comment) => comment.id !== commentId);
    });
  };
  function handleHomePress() {
    navigation.navigate('Home');
  }
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Text style={styles.profileText}>Stay updated on your professional world</Text>
      </View>

      <View style={styles.dateWrapper}>
        <Text style={styles.label}></Text>
        <View style={styles.passwordWrapper}>
        <TextInput placeholder="Email or Phone"style={{fontWeight: 500, color:'#747474' }}/>
        </View>
      </View>

      <View style={styles.dateWrapper}>
        <Text style={styles.label}></Text>
        <View style={styles.passwordWrapper}>
        <TextInput placeholder="Password" style={{fontWeight: 500, color:'#747474' }}/>
        <Text style={styles.showText}>show</Text>
        </View>
        <Text style={styles.passwordText}>Forgot password?</Text>
      </View>

      <TouchableOpacity style={styles.gameCommentsJumbotron}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      
<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginHorizontal: 24}}>
  <View style={{flex: 1, height: 1, backgroundColor: '#C5C5C5'}} />
  <View>
    <Text style={{width: 50, textAlign: 'center', color: '#747474', fontWeight: 500}}>or</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: '#C5C5C5'}} />
</View>

      <TouchableOpacity style={styles.gameCommentsJumbotronApple}>
        <Text style={styles.buttonTextApple}><Fontisto name="apple" size={19} color="black" />   Sign in with apple</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20
  },
  gameCommentsJumbotron: {
    marginTop: 18,
    padding: 14,
    marginHorizontal: 30,
    borderRadius: 20,
    backgroundColor: "#0072b1"
  },
  gameCommentsJumbotronApple:{
    marginTop: 12,
    padding: 14,
    marginHorizontal: 30,
    borderRadius: 20,
    backgroundColor: "white",
    borderColor: "#595959",
    borderWidth: 2
  },
  buttonText:{
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: 500
  },
  profileWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 14,
    marginRight: 50,
    fontWeight: 600,
    color: '#171717'
  },
  dateWrapper: {
    paddingTop: 25,
    paddingLeft: 20
  },
  label:{
    fontSize: 14,
    fontWeight: "bold",
    color: "gray"
  },
   passwordWrapper:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    padding: 14,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: "#858585"
  },
  passwordText:{
    color: "#0072b1",
    fontWeight: "bold", 
    marginTop: 10,
  },
  showText:{
    color: "#0072b1",
    fontWeight: "bold",
  },
  buttonTextApple:{
    textAlign: "center",
    fontSize: 16,
    color: "#595959",
    fontWeight: 500
  }
});
