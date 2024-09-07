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
  BackHandler,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import defaultStyles from '../utilities/defaultStyles';
import {SafeAreaView} from 'react-native-safe-area-context';

import DateTimePicker from '@react-native-community/datetimepicker';
import { BackIcon, PlusIcon, MinusIcon } from '../assets/Icons';

const SetPath = ({navigation, route}) => {
  const { pMP,  dMP,rC,pickLoc,dropLoc} = route.params
    console.log(route.params)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [num, setNum]=useState(0)
    
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setSelectedDate(date)
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
     <ScrollView contentContainerStyle={styles.scrollView}>
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
            
          />
          <Text style={styles.selectedDateText}>
            {selectedDate instanceof Date ? selectedDate.toLocaleString() : 'No date selected'}
          </Text>
        </View>

        <View style={styles.seatsSection}>
          <Text style={styles.seatsSectionTitle}>Number of seats available</Text>
          <View style={styles.seatsCounter}>
            <Pressable onPress={() => setNum((prev) => Math.max(0, prev - 1))} disabled={num === 0}>
              <MinusIcon size={50} />
            </Pressable>
            <Text style={styles.seatsNumber}>{num}</Text>
            <Pressable onPress={() => setNum((prev) => Math.min(5, prev + 1))} disabled={num === 4}>
              <PlusIcon size={50} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity 
  style={[
    styles.completeBookingButton, 
    num === 0 && styles.disabledButton
  ]}
  onPress={() => {
    // Handle booking completion logic here
    // console.log('Booking completed');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
  }}
  disabled={num === 0}
>
  <Text style={styles.completeBookingButtonText}>
    Complete Booking
  </Text>
</TouchableOpacity>
    </>
  );
};
export default SetPath;
const styles = StyleSheet.create({
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
    display:'flex'
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
});
