/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FooterMenu from '../components/FooterMenu';
import defaultStyles from '../utilities/defaultStyles';
const BookingsPage = ({navigation}) => {
  const bookings = [
    {id: '1', title: 'Booking 1', date: '2023-09-10'},
    {id: '2', title: 'Booking 2', date: '2023-09-15'},
    {id: '3', title: 'Booking 3', date: '2023-09-20'},
  ];

  return (
	<>
    <SafeAreaView
        style={{flex: 0, backgroundColor: '#B3E5FC'}}
        edges={['top']}
      />
      <View style={styles.container}>
      <Text style={styles.header}>Your Bookings</Text>
      <FlatList
        data={bookings}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.bookingItem}>
            <Text style={styles.bookingTitle}>{item.title}</Text>
            <Text style={styles.bookingDate}>{item.date}</Text>
          </View>
        )}
      />
      </View>
   
	<View style={defaultStyles.footerMenu}>
        <FooterMenu navigation={navigation} />
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
  bookingItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  bookingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004D4D',
  },
  bookingDate: {
    fontSize: 14,
    color: '#666666',
  },
});

export default BookingsPage;
