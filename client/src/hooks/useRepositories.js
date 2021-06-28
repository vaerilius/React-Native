import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (id, searchKeyword) => {
  let variables = searchKeyword
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
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  return { repositories: data ? data.repositories : null };
};

export default useRepositories;
