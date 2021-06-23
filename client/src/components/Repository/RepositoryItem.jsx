import React from "react";
import { View, Image, StyleSheet, Button, FlatList } from "react-native";
import Text from "../Text";
import Constants from "expo-constants";
import theme from "../../theme";
import * as Linking from "expo-linking";
import { useParams } from "react-router-native";
import { useRepository } from "../../hooks/useRepository";
import { ItemSeparator } from "./RepositoryListContainer";
import { format } from "date-fns";

const styles = StyleSheet.create({
  container: {
    padding: Constants.statusBarHeight,
  },
  rowDirectionRow: {
    flexDirection: "row",
  },
  rowDirectionCol: {
    flexDirection: "column",
  },
  header: {
    paddingLeft: 10,
  },
  containerBottom: {
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-between",
  },
  fixToText: {
    flexDirection: "row",
    alignContent: "flex-start",
  },
  image: {
    width: 45,
    height: 45,
  },
  language: {
    color: theme.colors.primary,
  },
  reviewsContainer: {
    flexDirection: "row",
    padding: Constants.statusBarHeight,
  },
  reviewRating: {
    borderColor: theme.colors.primary,
    borderWidth: 2.5,
    borderRadius: 45 / 2,
    color: theme.colors.primary,
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  reviewRatingText: {
    color: theme.colors.primary,
  },

  reviewContent: {
    paddingLeft: 10
  },
});

/**
 * @param number : Number
 * @returns string what is converted from  number
 */
const computeNumber = (num) =>
  num > 999 ? (num / 1000).toFixed(1) + "k" : num;

export const SingleRepository = () => {
  const { id } = useParams();
  const { repository, reviews } = useRepository(id);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} displayButton />
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewsContainer}>
      <View style={styles.reviewRating}>
        <Text style={styles.reviewRatingText} fontSize='subheading' fontWeight='bold' >{review.rating}</Text>
      </View>
      <View style={styles.reviewContent}>
        <Text fontWeight='bold' fontSize='subheading'>
          {review.user.username}
        </Text>
        <Text color='textSecondary' style={{ paddingBottom: 10 }}>
          {format(new Date(review.createdAt), "dd.MM.yyyy")}
        </Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export const RepositoryItem = ({ item, displayButton }) => {
  return (
    <View style={styles.container} testID={item.id}>
      <View style={styles.rowDirectionRow}>
        <Image
          style={styles.image}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />
        <View style={styles.header}>
          <Text
            fontWeight='bold'
            style={{ paddingBottom: 10 }}
            testID='fullName'
          >
            {item.fullName}
          </Text>
          <Text style={{ paddingBottom: 10 }} testID='description'>
            {item.description}
          </Text>
          <View style={styles.fixToText}>
            <Button
              onPress={() => console.log(item.language)}
              title={item.language}
              color={styles.language.color}
              accessibilityLabel='Learn more about this purple button'
              testID='language'
            />
          </View>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View>
          <Text fontWeight='bold' testID='stargazersCount'>
            {computeNumber(item.stargazersCount)}
          </Text>
          <Text color='textSecondary'>Stars</Text>
        </View>

        <View>
          <Text fontWeight='bold' testID='forksCount'>
            {computeNumber(item.forksCount)}
          </Text>
          <Text color='textSecondary'>Forks</Text>
        </View>

        <View>
          <Text fontWeight='bold' testID='reviewCount'>
            {computeNumber(item.reviewCount)}
          </Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View>
          <Text fontWeight='bold' testID='ratingAverage'>
            {item.ratingAverage}
          </Text>
          <Text color='textSecondary'>Ratings</Text>
        </View>
      </View>
      {displayButton && (
        <View>
          <Button
            style={{ flex: 1 }}
            onPress={() => Linking.openURL(item.url)}
            title='Open in GitHub'
            color={styles.language.color}
            accessibilityLabel='Learn more about this purple button'
            testID='url'
          />
        </View>
      )}
    </View>
  );
};
