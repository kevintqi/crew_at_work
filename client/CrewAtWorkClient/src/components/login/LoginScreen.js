import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  View,
  Button,
} from 'react-native';

import Logo from './Logo'
import Username from './Username';
import Password from './Password';
import SubmitButton from './SubmitButton'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
    this.getUsername = this._getUsername.bind(this);
    this.getPassword = this._getPassword.bind(this);
    this.submit = this._login.bind(this);
  }

  _getUsername(value) {
    const state = this.state;
    state.userName = value;
    this.setState(state);
  }

  _getPassword(value) {
    const state = this.state;
    state.password = value;
    this.setState(state);
  }

  _login() {
  }

  render() {
    const containerSize = this.props.layoutSize;
    const logoSize = containerSize / 2;
    const formSize = containerSize / 5;
    const buttonSize = containerSize - logoSize - formSize;

    return (
      <View style={{flex: this.props.layoutSize, justifyContent: 'space-evenly'}} >
        <Logo layoutSize={logoSize}/>
        <KeyboardAvoidingView 
          behavior="padding" 
          style={{flex:formSize, justifyContent: 'flex-start'}}>
          <Username
            placeholder="Username"
            getUsername={this.getUsername}
          />
          <Password  
            placeholder="Password" 
            getPassword={this.getPassword}/>
        </KeyboardAvoidingView>
        <SubmitButton
          layoutSize={buttonSize}
          title='Login'
          submit={this.submit}
        />
      </View>
    );
  }
}
