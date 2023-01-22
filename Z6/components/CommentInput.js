import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const CommentInput = (props) => {
  //deklaracija state varijable
  const [enteredComment, setEnteredComment] = useState('');
  const [enteredCommentTwo, setEnteredCommentTwo] = useState('');

  //postavlja vrijednost enteredComment varijable na vrijednost koju unesemo u textInuptu
  const commentInputHandler = (enteredText) => {
    setEnteredComment(enteredText);
  };
  const commentInputHandlerTwo = (enteredTextTwo) => {
    setEnteredCommentTwo(enteredTextTwo);
  };

  //kada se pozove onAddComment bilo gdje u aplikaciji proslijeđuje enteredComment vrijednost i čisti textInput
  const addCommentHandler = () => {
    props.onAddComment(enteredComment);
    props.onAddComment(enteredCommentTwo);
    setEnteredComment('');
    setEnteredCommentTwo('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="E-mail"
        style={styles.textInput}
        onChangeText={commentInputHandler}
        value={enteredComment}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        onChangeText={commentInputHandlerTwo}
        value={enteredCommentTwo}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Save" onPress={addCommentHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    margin: 10,
    width: '80%',
    borderColor: '#89CFF0',
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width: '25%',
  },
});
export default CommentInput;