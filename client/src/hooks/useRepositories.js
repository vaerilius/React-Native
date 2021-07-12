import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (id, searchKeyword, first) => {
  let variables =
    searchKeyword !== ""
      ? {
          searchKeyword,
        }
      : {};
  switch (id) {
    case 0:
      variables = {
        ...variables,
        orderBy: "CREATED_AT",
        orderDirection: "DESC",
      };
      break;
    case 1:
      variables = { orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
      break;
    case 2:
      variables = {
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC",
      };
      break;

    default:
      variables = {
        orderBy: "CREATED_AT",
        orderDirection: "DESC",
      };
      break;
  }

  variables = { ...variables, first };

  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) return;

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
  };
};

export default useRepositories;
