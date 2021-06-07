import { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState(undefined);
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  // console.log(`data`, data);
  // console.log(`loading`, loading);
  // console.log(`error`, error);

  useEffect(() => {
    if(loading) return;
    // Notify
    if(error) throw new Error(error.message);
    setRepositories(data.repositories);
  }, [loading, error]);

  return { repositories, error, loading };
};

export default useRepositories;
