import React from "react";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { View, Button } from "react-native";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useHistory } from "react-router-native";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput
            name='username'
            placeholder='Username'
            testID='usernameField'
          />
          <FormikTextInput
            secureTextEntry
            name='password'
            placeholder='Password'
            testID='passwordField'
          />
          <Button onPress={handleSubmit} title='Log in' testID='submitButton' />
        </View>
      )}
    </Formik>
  );
};

const SignIn = () => {
  const history = useHistory();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      history.push("/");
    } catch (e) {
      console.log(e);
    }

    initialValues.username = "";
    initialValues.password = "";
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
