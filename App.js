import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './src/components/Repository/RepositoryList';

export default function App() {
  return (
    <View style={styles.container}>

      <RepositoryList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
  },
});
