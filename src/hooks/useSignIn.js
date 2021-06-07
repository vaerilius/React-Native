import { useMutation, useApolloClient } from "@apollo/client";
import { useContext } from "react";
import { SIGN_IN } from "../graphql/mutations";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data, errors } = await mutate({
      variables: { username: username, password: password },
    });
    console.log(`data`, data);
    console.log(`errors`, errors);
    if (data && !errors) {
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
    }
  };

  return [signIn, result];
};

export default useSignIn;
