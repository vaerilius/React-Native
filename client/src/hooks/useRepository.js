import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

export const useRepository = (id, first) => {

  if(!id) return;
  let variables = { id, first };

  const { data, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-first",
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) return;

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  const reviews =
    !loading && data
      ? data.repository.reviews.edges.map((edge) => edge.node)
      : [];

  return {
    repository: data?.repository,
    reviews,
    loading,
    fetchMore: handleFetchMore,
  };
};
