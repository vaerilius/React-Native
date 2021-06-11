import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    padding: Constants.statusBarHeight,
    backgroundColor: theme.colors.navBg,
    flexDirection: "row",
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <AppBarTab to='/' label='Repositories' />
        <AppBarTab to='/SignIn' label='Sign in' />
      </ScrollView>
    </View>
  );
};

export default AppBar;
