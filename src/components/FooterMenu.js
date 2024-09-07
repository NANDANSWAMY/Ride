/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { HomeIcon, SearchIcon, ProfileIcon, BookingIcon } from '../assets/Icons';

const FooterMenu = ({navigation}) => {
  return (
    // <SafeAreaView edges={} style={styles.safeArea}>
    <>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <HomeIcon/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SearchPage')}>
          <SearchIcon/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Bookings')}>
          <BookingIcon/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ProfilePage')}>
          <ProfileIcon/>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default FooterMenu;

const styles = StyleSheet.create({

  footer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // alignSelf:'center',
    backgroundColor: '#FFF',
    // alignContent:'center',
    height: 60,
    
    // marginLeft:
    // width:'100%',
  },
  button: {
    // marginBottom:10
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingVertical:-10
  },
  buttonText: {
 
  },
});
