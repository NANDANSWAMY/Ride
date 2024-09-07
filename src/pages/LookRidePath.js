/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useContext, useReducer} from 'react';
import {
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Platform,
  Linking,
  Button,
  TextInput,
  FlatList,
  BackHandler,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import defaultStyles from '../utilities/defaultStyles';
import {SafeAreaView} from 'react-native-safe-area-context';

import { BackIcon } from '../assets/Icons';

const LookRidePath = ({navigation, route}) => {
	console.log(route.params)
  const { pMP,  dMP,rC,pickLoc,dropLoc} = route.params
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showTrips, setShowTrips] = useState(false)
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
    const bookings = [
      {id: '1', username: 'Alice', trips: 15, passengers: 35, from: 'Flinders Street', to: 'Southern Cross', spots: 3, timeDiff: '5 mins', date: '2023-09-10 14:30', rating: 4.5},
      {id: '2', username: 'Bob', trips: 8, passengers: 20, from: 'Richmond', to: 'Southern Cross', spots: 2, timeDiff: '10 mins', date: '2023-09-11 09:45', rating: 4.1},
      {id: '3', username: 'Charlie', trips: 22, passengers: 48, from: 'Melbourne Central', to: 'Southern Cross', spots: 1, timeDiff: '-5 mins', date: '2023-09-12 11:15', rating: 3.5},
      {id: '4', username: 'Diana', trips: 5, passengers: 12, from: 'North Melbourne', to: 'Southern Cross', spots: 4, timeDiff: '5 mins', date: '2023-09-13 16:00', rating: 4.8},
      {id: '5', username: 'Ethan', trips: 12, passengers: 28, from: 'South Yarra', to: 'Southern Cross', spots: 2, timeDiff: '-5 mins', date: '2023-09-14 08:30', rating: 4.4},
      {id: '6', username: 'Fiona', trips: 18, passengers: 40, from: 'Caulfield', to: 'Southern Cross', spots: 3, timeDiff: '10 mins', date: '2023-09-15 13:45',rating: 4.1},
      {id: '7', username: 'George', trips: 7, passengers: 15, from: 'Box Hill', to: 'Southern Cross', spots: 1, timeDiff: '5 mins', date: '2023-09-16 10:20', rating: 2.5},
      {id: '8', username: 'Hannah', trips: 25, passengers: 50, from: 'Ringwood', to: 'Southern Cross', spots: 4, timeDiff: '-5 mins', date: '2023-09-17 15:30',rating: 4.8},
      {id: '9', username: 'Ian', trips: 3, passengers: 8, from: 'Frankston', to: 'Southern Cross', spots: 2, timeDiff: '10 mins', date: '2023-09-18 12:00', rating: 4.3},
      {id: '10', username: 'Julia', trips: 30, passengers: 45, from: 'Dandenong', to: 'Southern Cross', spots: 3, timeDiff: '5 mins', date: '2023-09-19 17:15',rating: 4.2},
    ];
    
    
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      setSelectedDate(date)
      setShowTrips(true)
      hideDatePicker();
    };
  
  return (
    <>
      <StatusBar
        hidden={false}
        backgroundColor={'#B3E5FC'}
        barStyle={'light-content'}
      />
      <SafeAreaView
        style={{flex: 0, backgroundColor: '#B3E5FC'}}
        edges={['top']}
      />
     
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
            <BackIcon />
          </Pressable>
          <Text style={styles.headerText}>Complete Process</Text>
        </View>

        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>From: {pickLoc}</Text>
          <Text style={styles.addressText}>To: {dropLoc}</Text>
        </View>

        <View style={styles.dateTimeSection}>
          <TouchableOpacity style={styles.dateTimeButton} onPress={showDatePicker}>
            <Text style={styles.dateTimeButtonText}>
              {selectedDate === new Date() ? 'Select date & time' : 'Change date & time'}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            date={selectedDate}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            minimumDate={new Date()} 
          />
          <Text style={styles.selectedDateText}>
            {selectedDate instanceof Date ? selectedDate.toLocaleString() : 'No date selected'}
        </Text>
        </View>
        
        <ScrollView contentContainerStyle={styles.scrollView}>
       {showTrips &&
        <FlatList
        data={bookings}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity 
            style={styles.bookingItem}
            onPress={() => setSelectedBooking(item.id)}
          >
            <View style={styles.bookingContent}>
              <View style={styles.userInfo}>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.tripInfo}>
                  {item.trips} trips | {item.passengers} passengers
                </Text>
               
              </View>
              <View style={styles.routeInfo}>
                <Text style={styles.route}>{item.from} → {item.to}</Text>
                <Text style={styles.dateTime}>{item.date}</Text>
              </View>
              <View style={styles.tripDetails}>
                <Text style={styles.spots}>{item.spots} spot{item.spots !== 1 ? 's' : ''} available | {item.rating.toFixed(1)} Rating</Text>
                <Text style={[styles.timeDiff, {color: item.timeDiff.includes('-') ? 'red' : 'green'}]}>
                  {item.timeDiff}
                </Text>
              </View>
            </View>
            <View style={styles.radioContainer}>
              <View style={styles.radioOuter}>
                {selectedBooking === item.id && <View style={styles.radioInner} />}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
}
       
        </ScrollView>
        <TouchableOpacity 
        style={[
          styles.completeBookingButton, 
          (!selectedBooking) && styles.disabledButton
        ]}
        onPress={() => {
          // Handle booking completion logic here
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        }}
        disabled={!selectedBooking}
      >
        <Text style={styles.completeBookingButtonText}>
          Raise request
        </Text>
      </TouchableOpacity>
    </>
  );
};
export default LookRidePath;
const styles = StyleSheet.create({
	container:{
		marginLeft:20,
		marginTop:30,
		marginRight:20,
		backgroundColor: '#CCFFFF',

	},
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  addressContainer: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  addressText: {
    fontSize: 16,
    color: '#0D47A1',
    marginBottom: 5,
  },
  dateTimeSection: {
    marginBottom: 20,
    display:'flex',
    marginLeft:20,
    marginRight:20,
  },
  dateTimeButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    
    borderRadius: 10,
    alignItems: 'center',
  },
  dateTimeButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedDateText: {
    marginTop: 10,
    // display:'flex',
    justifyContent:'center',
    fontSize: 16,
    color: '#333',
  },
  disabledButton: {
    backgroundColor: '#A5D6A7', // A lighter green for the disabled state
    opacity: 0.7,
  },
  seatsSection: {
    marginBottom: 20,
  },
  seatsSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  seatsCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seatsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  completeBookingButton: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  completeBookingButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  tripsDone: {
    fontSize: 14,
    color: '#666',
  },
  tripInfo: {
    marginBottom: 10,
  },
  route: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
  dateTime: {
    fontSize: 14,
    color: '#666',
  },
  tripDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spots: {
    fontSize: 14,
    color: '#007AFF',
  },
  timeDiff: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  
  radioContainer: {
    marginRight: 10,
  },
  radioOuter: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF',
  },
  bookingContent: {
    flex: 1,
  },
});
