import React from "react";
import { TextInput as NativeTextInput } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  layout: {
    padding: 10,
    margin: 10,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    borderRadius: 3
  },
});

const TextInput = ({ style, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={(textInputStyle, styles.layout)} {...props} />;
};

export default TextInput;
