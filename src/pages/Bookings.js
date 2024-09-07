/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FooterMenu from '../components/FooterMenu';
import defaultStyles from '../utilities/defaultStyles';

const BookingsPage = ({navigation}) => {
  const riderBookings = [
    {
      id: '1',
      passengers: 3,
      from: 'Flinders Street',
      to: 'Southern Cross',
      rating: 4.5,
      kmsTravel: 8,
      creditsEarned: 10,
      date: '2023-09-10',
      tripCompletedTime: '14:30'
    },
    {
      id: '2',
      passengers: 2,
      from: 'Richmond',
      to: 'Parliament',
      rating: 5,
      kmsTravel: 12,
      creditsEarned: 15,
      date: '2023-09-15',
      tripCompletedTime: '09:45'
    },
    {
      id: '3',
      passengers: 4,
      from: 'Melbourne Central',
      to: 'Flagstaff',
      rating: 4,
      kmsTravel: 6,
      creditsEarned: 8,
      date: '2023-09-20',
      tripCompletedTime: '11:15'
    },
    {
      id: '4',
      passengers: 1,
      from: 'South Yarra',
      to: 'Flinders Street',
      rating: 4.8,
      kmsTravel: 15,
      creditsEarned: 12,
      date: '2023-09-25',
      tripCompletedTime: '16:20'
    },
    {
      id: '5',
      passengers: 3,
      from: 'Footscray',
      to: 'Southern Cross',
      rating: 4.2,
      kmsTravel: 10,
      creditsEarned: 11,
      date: '2023-09-30',
      tripCompletedTime: '08:50'
    },
    {
      id: '6',
      passengers: 2,
      from: 'North Melbourne',
      to: 'Melbourne Central',
      rating: 4.7,
      kmsTravel: 7,
      creditsEarned: 9,
      date: '2023-10-05',
      tripCompletedTime: '13:10'
    },
    {
      id: '7',
      passengers: 4,
      from: 'Caulfield',
      to: 'Richmond',
      rating: 4.9,
      kmsTravel: 18,
      creditsEarned: 14,
      date: '2023-10-10',
      tripCompletedTime: '17:45'
    },
    {
      id: '8',
      passengers: 1,
      from: 'Essendon',
      to: 'Flinders Street',
      rating: 4.3,
      kmsTravel: 20,
      creditsEarned: 13,
      date: '2023-10-15',
      tripCompletedTime: '10:30'
    },
    {
      id: '9',
      passengers: 3,
      from: 'Box Hill',
      to: 'Parliament',
      rating: 4.6,
      kmsTravel: 16,
      creditsEarned: 12,
      date: '2023-10-20',
      tripCompletedTime: '15:55'
    },
    {
      id: '10',
      passengers: 2,
      from: 'Sunshine',
      to: 'Southern Cross',
      rating: 4.4,
      kmsTravel: 14,
      creditsEarned: 11,
      date: '2023-10-25',
      tripCompletedTime: '12:40'
    }
  ];

  const tagAlongBookings = [
    {id: '1', driver: 'Alice', from: 'South Yarra', to: 'Prahran', rating: 4.5, date: '2023-09-12', time: '08:30'},
    {id: '2', driver: 'Bob', from: 'Caulfield', to: 'Malvern', rating: 5, date: '2023-09-17', time: '13:45'},
    {id: '3', driver: 'Charlie', from: 'Box Hill', to: 'Blackburn', rating: 4, date: '2023-09-22', time: '10:20'},
  ];

  const renderRiderItem = ({item}) => (
    <View style={styles.bookingItem}>
      <Text style={styles.bookingTitle}>From {item.from} to {item.to}</Text>
      <Text style={styles.bookingDetail}>Passengers: {item.passengers}</Text>
      <Text style={styles.bookingDetail}>Rating: {item.rating}/5</Text>
      <Text style={styles.bookingDetail}>Distance: {item.kmsTravel} km</Text>
      <Text style={styles.bookingDetail}>Credits Earned: {item.creditsEarned}</Text>
      <Text style={styles.bookingDate}>{item.date} - Completed at {item.tripCompletedTime}</Text>
    </View>
  );

  const renderTagAlongItem = ({item}) => (
    <View style={styles.bookingItem}>
      <Text style={styles.bookingTitle}>From {item.from} to {item.to}</Text>
      <Text style={styles.bookingDetail}>Driver: {item.driver}</Text>
      <Text style={styles.bookingDetail}>Rating: {item.rating}/5</Text>
      <Text style={styles.bookingDate}>{item.date} at {item.time}</Text>
    </View>
  );

  return (
    <>
      <SafeAreaView
        style={{flex: 0, backgroundColor: '#B3E5FC'}}
        edges={['top']}
      />
      <View style={styles.container}>
        <Text style={styles.header}>Your Booking History</Text>
        
        <Text style={styles.subHeader}>As a Rider</Text>
        <FlatList
          data={riderBookings}
          keyExtractor={item => item.id}
          renderItem={renderRiderItem}
        />
        
        <Text style={styles.subHeader}>As a Tag Along</Text>
        <FlatList
          data={tagAlongBookings}
          keyExtractor={item => item.id}
          renderItem={renderTagAlongItem}
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
    backgroundColor: '#F0F8FF', // Light blue background
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A8A', // Dark blue
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2563EB', // Medium blue
    marginTop: 15,
    marginBottom: 10,
    paddingLeft: 10,
  },
  bookingItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  bookingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A', // Dark blue
    marginBottom: 5,
  },
  bookingDetail: {
    fontSize: 16,
    color: '#4B5563', // Gray
    marginBottom: 3,
  },
  bookingDate: {
    fontSize: 14,
    color: '#6B7280', // Light gray
    marginTop: 5,
    fontStyle: 'italic',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: 16,
    color: '#4B5563', // Gray
    marginRight: 5,
  },
  ratingValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F59E0B', // Amber
  },
  listSeparator: {
    height: 1,
    backgroundColor: '#E5E7EB', // Very light gray
    marginVertical: 10,
  },
  noBookingsText: {
    fontSize: 18,
    color: '#6B7280', // Light gray
    textAlign: 'center',
    marginTop: 20,
  },
  footerMenu: {
    backgroundColor: '#1E3A8A', // Dark blue
    padding: 10,
  },
});

export default BookingsPage;