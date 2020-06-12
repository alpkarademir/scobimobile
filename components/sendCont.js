import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';

import { connect } from 'react-redux';
import { addComment } from '../redux/actions/post';
import PropTypes from 'prop-types'


function SendCont({ post, addComment }) {
  const [text, setText] = useState('');
  return (
    <View style={stylecomment.container}>
      <Text style={stylecomment.textArea}>Send Comment</Text>
      <TextInput
      style={{
        marginTop: 5,
        marginBottom: 10,
        height: 40,
        width: 320,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 30,
        marginLeft: 10,
      }}
      onChangeText={text => setText(text)}
      autoCorrect={false}
      value={text}
    />
      <Button title="send" color="green" onPress={() => addComment(post._id, {text})} />
    </View>
  );
}

SendCont.propTypes = {
  post: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  post: state.post.post,
})

export default connect(mapStateToProps, { addComment })(SendCont)

const stylecomment = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textArea: {
    marginBottom: 0,
    justifyContent: 'center',
    marginLeft: 10,
  },
});
