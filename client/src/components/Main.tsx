import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";
import RepositoryList from "./Repository/RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import theme from "../theme";
import { SingleRepository } from "./Repository/RepositoryItem";
import { CreateReview } from "./CreateReview";
import SignUp from "./SignUp";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: Platform.select({
      android: theme.fonts.adnroid,
      ios: theme.fonts.ios,
      default: theme.fonts.main,
    }),
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
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/create-review' exact>
          <CreateReview />
        </Route>
        <Route path='/repository/:id' exact>
          <SingleRepository />
        </Route>
        <Route path='/SignIn' exact>
          <SignIn />
        </Route>
        <Route path='/signUp' exact>
          <SignUp />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;
