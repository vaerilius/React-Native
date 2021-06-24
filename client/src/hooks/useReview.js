import { useMutation } from "@apollo/client";
import { CreateReview } from "../graphql/mutations";

export const useCreateReview = () => {
  const [mutate] = useMutation(CreateReview);

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const { data } = await mutate({
      variables: { ownerName, repositoryName, rating, text },
    });
    return data.createReview.repositoryId;
  };

  return [createReview];
};
