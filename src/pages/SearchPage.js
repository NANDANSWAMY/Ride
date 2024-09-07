/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = query => {
    setSearchQuery(query);
    // Implement your search logic here
    // For now, we'll just set some dummy results
    setSearchResults([
      {id: '1', title: 'Result 1'},
      {id: '2', title: 'Result 2'},
      {id: '3', title: 'Result 3'},
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Search</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={searchResults}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Text style={styles.resultItem}>{item.title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004D4D',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#99FFFF',
  },
});

export default SearchPage;
