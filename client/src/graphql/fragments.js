
import { gql } from '@apollo/client';

export const ReposityDetails = gql`
  fragment RepositoryDetails on Repository {
    name,
    ownerAvatarUrl,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage
  }`;