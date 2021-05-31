import React from "react";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { View, Button } from "react-native";
import * as yup from "yup";
// ...

const validationSchema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required("Username is required"),
    password: yup
      .string()
      .required("Password is required"),
  });
const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
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
