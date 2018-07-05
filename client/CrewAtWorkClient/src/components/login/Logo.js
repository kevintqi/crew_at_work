import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import logoImg from '../../images/sebeca.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={{flex:this.props.layoutSize, justifyContent: 'center', alignSelf: 'center'}} >
        <Image source={logoImg} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});