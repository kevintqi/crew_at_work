import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native';

export default class ButtonSubmit extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{flex:this.props.layoutSize, justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.props.submit}
            activeOpacity={.5}>
            <Text style={styles.text}>
            {this.props.title}
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'center',
    height: 40,
    width: 180,
    borderRadius: 0,
    zIndex: 100,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
