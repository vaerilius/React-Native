import React from 'react';
import {  StyleSheet, View } from 'react-native';
import RepositoryList from './Repository/RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Simple text</Text>
      <Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
      <Text fontWeight='bold' fontSize='subheading'>
        Bold subheading
      </Text>
      <Text color='textSecondary'>Text with secondary color</Text> */}
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;