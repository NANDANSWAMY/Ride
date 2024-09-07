/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, FlatList, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FooterMenu from '../components/FooterMenu'
import defaultStyles from '../utilities/defaultStyles';
const SearchPage = ({navigation}) => {
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
    <>
   <SafeAreaView
        style={{flex: 0, backgroundColor: '#B3E5FC'}}
        edges={['top']}
      />
      <View style={styles.container}>
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
      
    </View>
    <View style={defaultStyles.footerMenu}>
			<FooterMenu navigation={navigation}/>
		</View>
    
    </>
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
  footerMenu:{
		bottom: Platform.OS === 'android' ? 15 : 25,
		position: 'absolute',
		// paddingLeft: 23,
		// paddingRight: 23,
		width:'100%'
	  }
});

export default SearchPage;
