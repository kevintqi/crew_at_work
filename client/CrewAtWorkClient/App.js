import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginScreen from './src/components/login/LoginScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen  layoutSize={100} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: 'red',
  },
});
