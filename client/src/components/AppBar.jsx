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
    flexDirection: "column",
  },
  scrollView: {
    marginVertical: 10,
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
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        {data.authorizedUser ? (
          <>
            <Link to='/' component={AppBarTab} label='Repositories' />
            <Link
              to='/create-review'
              component={AppBarTab}
              label='Create a review'
            />
            <Link onPress={signOut} component={AppBarTab} label={"Sign Out"} />
          </>
        ) : (
          <>
            <Link to='/SignIn' component={AppBarTab} label='SignIn' />
            <Link to='/signUp' component={AppBarTab} label='Sign up' />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
