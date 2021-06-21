import React, { useState } from 'react';
import { Text, TextInput, Pressable, View } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

import {RepositoryListContainer} from '../components/Repository/RepositoryListContainer';


describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here

      const { debug, getAllByTestId  } = render(<RepositoryListContainer  repositories={repositories}/>);

      // debug();
      let [first, second] = getAllByTestId('fullName');
      expect(first).toHaveTextContent('jaredpalmer/formik');
      expect(second).toHaveTextContent('async-library/react-async');

      [first, second] = getAllByTestId('description');
      expect(first).toHaveTextContent('Build forms in React, without the tears');
      expect(second).toHaveTextContent('Flexible promise-based React data loader');

      [first, second] = getAllByTestId('language');
      expect(first).toHaveTextContent('TypeScript');
      expect(second).toHaveTextContent('JavaScript');

      [first, second] = getAllByTestId('stargazersCount');
      expect(first).toHaveTextContent('21.9k');
      expect(second).toHaveTextContent('1.8k');

      [first, second] = getAllByTestId('forksCount');
      expect(first).toHaveTextContent('1.6k');
      expect(second).toHaveTextContent('69');

      [first, second] = getAllByTestId('reviewCount');
      expect(first).toHaveTextContent('3');
      expect(second).toHaveTextContent('3');

      [first, second] = getAllByTestId('ratingAverage');
      expect(first).toHaveTextContent('88');
      expect(second).toHaveTextContent('72');
    });
  });
});