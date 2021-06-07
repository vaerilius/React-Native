import React from "react";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";
const apolloClient = createApolloClient();
import Constants from 'expo-constants';

export default function App() {
  console.log(Constants.manifest);
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
}
