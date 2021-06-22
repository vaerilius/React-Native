import React, { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useQuery, useApolloClient } from "@apollo/client";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { AUTH } from "../graphql/queries";
import Text from "./Text";
import AuthStorageContext from "../contexts/AuthStorageContext";
import { Link, useHistory } from "react-router-native";

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
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const { loading, data } = useQuery(AUTH);
  const history = useHistory();

  const signOut = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push("/signIn");
  };

  if (loading) return <Text>Loading...</Text>;
  console.log("data :>> ", data);
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        {data.authorizedUser ? (
          <View>
            <Link to='/' component={AppBarTab} label='Repositories' />
            <Link onPress={signOut} component={AppBarTab} label={"Sign Out"} />
          </View>
        ) : (
          <Link to='/SignIn' component={AppBarTab} label='SignIn' />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
