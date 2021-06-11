import React from "react";
import { StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: theme.colors.textWhite,
    fontSize: 24,
  },
});

const AppBarTab = (props) => {
  return (
    // <Pressable style={styles.container} onPress={() => console.log("click")}>
    <Link
      to={{
        pathname: props.to,
        state: { fromDashboard: true },
      }}
    >
      <Text style={styles.text}> {props.label}</Text>
    </Link>

    // </Pressable>
  );
};

export default AppBarTab;
