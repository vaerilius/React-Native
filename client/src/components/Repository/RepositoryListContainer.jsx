import React from "react";
import { FlatList, StyleSheet, View, Pressable } from "react-native";
import { useHistory } from "react-router";
import { RepositoryItem } from "./RepositoryItem";
import theme from "../../theme";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.separator,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, onEndReach }) => {

  const history = useHistory();
  const repositoryNodes = repositories
    ? repositories.edges && repositories.edges.map((edge) => edge.node)
    : [];

  const PressableContainer = ({ item }) => {
    const onPress = () => {
      history.push(`/repository/${item.id}`);
    };
    return (
      <Pressable onPress={onPress}>
        <RepositoryItem item={item} />
      </Pressable>
    );
  };

  return (
      <FlatList
        data={repositoryNodes}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={PressableContainer}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
  );
};

export default RepositoryListContainer;
