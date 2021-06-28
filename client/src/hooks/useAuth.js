import {  useQuery } from "@apollo/client";
import { AUTH } from "../graphql/queries";

export const useAuth = () => {
  const { loading, data } = useQuery(AUTH, {
    fetchPolicy: "cache-and-network",
  });

  return { data, loading };

};

