import React from "react";
import { Button, Menu, Provider, Searchbar } from "react-native-paper";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const [selectedSortType, setSelectedSortType] = React.useState({
    id: 0,
    label: "Latest repositories",
    searchKeyword: "",
  });
  
  let { repositories, fetchMore } = useRepositories(
    selectedSortType.id,
    selectedSortType.searchKeyword,
    6
  );
  const [visible, setVisible] = React.useState(false);

  const onEndReach = () => fetchMore();

  return (
    <Provider>
      <Searchbar
        placeholder='Search'
        onChangeText={(query) =>
          setSelectedSortType({ ...selectedSortType, searchKeyword: query })
        }
        value={selectedSortType.searchKeyword}
      />
      <Menu
        visible={visible}
        onDismiss={() => setVisible(!visible)}
        anchor={
          <Button onPress={() => setVisible(!visible)}>
            {selectedSortType.label}
          </Button>
        }
      >
        <Menu.Item contentStyle={{ opacity: 0.4 }} title='Select an item...' />
        <Menu.Item
          onPress={() =>
            setSelectedSortType({
              ...selectedSortType,
              id: 0,
              label: "Latest repositories",
            })
          }
          title='Latest repositories'
        />
        <Menu.Item
          onPress={() =>
            setSelectedSortType({
              ...selectedSortType,
              id: 1,
              label: "Highest rated repositories",
            })
          }
          title='Highest rated repositories'
        />
        <Menu.Item
          onPress={() =>
            setSelectedSortType({
              ...selectedSortType,
              id: 2,
              label: "Lowest rated repositories",
            })
          }
          title='Lowest rated repositories'
        />
      </Menu>
      <RepositoryListContainer
        repositories={repositories}
        onEndReach={onEndReach}
      />
    </Provider>
  );
};
export default RepositoryList;
