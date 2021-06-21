import React from "react";
import useRepositories from "../../hooks/useRepositories";

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};
export default RepositoryList;
