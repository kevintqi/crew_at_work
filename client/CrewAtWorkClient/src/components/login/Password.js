import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {StyleSheet, View, TextInput, Image, TouchableOpacity} from 'react-native';

import passwordImg from '../../images/password.png';
import eyeImg from '../../images/eye_black.png';
export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: true,
    };
    this.show = this._show.bind(this);
   }

  _show() {
    const state = this.state;
    state.show = !this.state.show;
    this.setState(state);
  }

  render() {
    return (
      <View style={styles.inputWrapper}>
        <Image source={passwordImg} style={styles.inlineImg} />
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.state.show}
          autoCorrect={false}
          onChangeText={this.props.getPassword}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnEye}
          onPress={this.show}>
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>
      </View>
    );
  }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  input: {
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    color: '#ffffff',    
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  inputWrapper: {
    flex: 1,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
  btnEye: {
    position: 'absolute',
    width: 25,
    height: 25,
    right: 35,
    top: 9,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
});