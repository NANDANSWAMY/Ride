/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FooterMenu from '../components/FooterMenu';
import defaultStyles from '../utilities/defaultStyles';
const ProfilePage = ({navigation}) => {
  const userDetails = {
    name: 'Nandan Krishnappa',
    email: 'nandan@example.com',
    phone: '+1 123-456-7890',
  };

  return (
    <>
       <SafeAreaView
        style={{flex: 0, backgroundColor: '#B3E5FC'}}
        edges={['top']}
      />
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{userDetails.name}</Text>
          <Text style={styles.detail}>{userDetails.email}</Text>
          <Text style={styles.detail}>{userDetails.phone}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>
			 navigation.reset({
                index: 0,
                routes: [{ name: 'InitialLanding' }],
              })
		}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
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
  profileInfo: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004D4D',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#004D4D',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
