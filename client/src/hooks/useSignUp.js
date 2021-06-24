import { useMutation } from "@apollo/client";
import { SignUp } from "../graphql/mutations";

export const useSignUp = () => {
  const [mutate] = useMutation(SignUp);
  const signUp = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { username: username, password: password },
    });
    return data;
  };

  return [signUp];
};
