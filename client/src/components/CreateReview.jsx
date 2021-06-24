import React from "react";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { View, Button } from "react-native";
import * as yup from "yup";
import { useCreateReview } from "../hooks/useReview";
import { useHistory } from "react-router-native";

let initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: 0,
  review: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup.number().required("Rating is required").positive().max(100),
});

export const CreateReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput
            name='ownerName'
            placeholder='Repository owner name'
            testID='ownerNameField'
          />
          <FormikTextInput
            name='repositoryName'
            placeholder='Repository name'
            testID='repositoryNameField'
          />
          <FormikTextInput
            name='rating'
            placeholder='Rating between 0 and 100'
            testID='ratingField'
          />
          <FormikTextInput
            name='review'
            placeholder='Review'
            testID='reviewField'
          />
          <Button
            onPress={handleSubmit}
            title='Create a review'
            testID='submitButton'
          />
        </View>
      )}
    </Formik>
  );
};

export const CreateReview = () => {
  const history = useHistory();
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    try {
      const data = await createReview({
        ownerName,
        repositoryName,
        rating: Number(rating),
        text,
      });
      history.push(`/repository/${data.repositoryId}`);
    } catch (e) {
      console.log(e);
    }

    initialValues = { ...initialValues };
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};
