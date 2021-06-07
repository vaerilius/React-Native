import React from "react";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { View, Button } from "react-native";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useHistory } from "react-router-native";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const history = useHistory();

  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push("/");
    } catch (e) {
      console.log(e);
    }

    initialValues.username = "";
    initialValues.password = "";
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput
              secureTextEntry
              name='password'
              placeholder='Password'
            />
            <Button onPress={handleSubmit} title='Log in' />
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
