import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  console.log(`data`, data);
  console.log(`loading`, loading);
  console.log(`error`, error);


  return { data, error, loading };
};

export default useRepositories;
