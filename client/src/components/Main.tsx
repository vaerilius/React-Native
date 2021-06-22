import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Route, Switch, Redirect, useParams } from "react-router-native";
import RepositoryList from "./Repository/RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import theme from "../theme";
import { RepositoryItem } from "./Repository/RepositoryItem";
import { useRepository } from "../hooks/useRepository";

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

const DisplayItem = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  
  return (
    <RepositoryItem item={repository} displayButton />
  )
}

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
        <Route path='/repository/:id' exact>
          <DisplayItem/>
        </Route>
        <Route path='/SignIn' exact>
          <SignIn />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;
