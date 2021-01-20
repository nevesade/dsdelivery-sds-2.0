import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import Home from './src/Home';
import Routes from './src/Routes';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
});
