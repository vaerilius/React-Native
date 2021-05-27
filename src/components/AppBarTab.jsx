import React from "react";
import { StyleSheet, Pressable } from "react-native";
import Text from "../Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  text: {
    color: theme.colors.textWhite,
    fontSize: 24,
  },
});

const AppBarTab = () => {
  return (
    <Pressable style={styles.container} onPress={() => console.log("click")}>
      <Text style={styles.text}>Repositories</Text>
    </Pressable>
  );
};

export default AppBarTab;
