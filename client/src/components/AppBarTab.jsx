
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: theme.colors.textWhite,
    fontSize: 20,
  },
});

const AppBarTab = (props) => {
  return (
      <Pressable {...props}>
        <Text style={styles.text}> {props.label}</Text>
      </Pressable>
  );
};

export default AppBarTab;