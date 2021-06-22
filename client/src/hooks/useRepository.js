import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

export const useRepository = (id) => {
  const { data, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id },
  });
  return { repository: data.repository ? data.repository : null };
};
