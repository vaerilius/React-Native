import React from "react";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { View, Button } from "react-native";
import * as yup from "yup";
import { useHistory } from "react-router-native";
import { useSignUp } from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required").min(1).max(30),
  password: yup.string().required("Password is required").min(5).max(50),
  passwordConfirmation: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref('password')], 'Passwords do not match')
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
          <FormikTextInput
            secureTextEntry
            name='passwordConfirmation'
            placeholder='password confirmation'
            testID='passwordConfirmationField'
          />
          <Button
            onPress={handleSubmit}
            title='Sign up'
            testID='submitButton'
          />
        </View>
      )}
    </Formik>
  );
};

const SignUp = () => {
  const history = useHistory();
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();


  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signUp({ username, password });
      await signIn({ username, password });


      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignUp;
