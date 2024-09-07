/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FooterMenu from '../components/FooterMenu';
import defaultStyles from '../utilities/defaultStyles';
import { getInitials } from '../utilities/helpers';
const ProfilePage = ({navigation}) => {
  const userDetails = {
    name: 'Nandan Krishnappa',
    email: 'nandan@example.com',
    phone: '+1 123-456-7890',
    dateRegistered: 'Aug 1, 2024',
    riderStats: {
      averageRating: 4.8,
      totalTrips: 52,
      passengersCount: 87,
      creditsEarned: 1250,
      kmsTravelled: 1580,
    },
    tagAlongStats: {
      tripsCompleted: 38,
      kmsTravelled: 920,
    },
  };

  const StatItem = ({label, value}) => (
    <View style={styles.statItem}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );

  return (
    <>
      <SafeAreaView
        style={{flex: 0, backgroundColor: '#B3E5FC'}}
        edges={['top']}
      />
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>
        <Text style={styles.dateRegistered}>
          Member since: {userDetails.dateRegistered}
        </Text>
        <View style={{display:'flex', flexDirection:'row', backgroundColor: '#FFFFFF', padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
    alignItems:'center'
    }}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{userDetails.name}</Text>
          <Text style={styles.detail}>{userDetails.email}</Text>
          <Text style={styles.detail}>{userDetails.phone}</Text>
        </View>
        <View style={{flex:1}}></View>
        <View
				style={{
					width: 100,
					height: 100,
					borderRadius: 50,
					borderWidth: 1.5,
					borderColor: '#004D4D',
					backgroundColor: '#AFEEEE',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				>
				<Text style={{ fontFamily: 'Mulish-Bold', fontSize: 42, lineHeight: 49.2, color:'004D4D' }}>
					{getInitials(userDetails.name)}
				</Text>
				</View>
        </View>
        <ScrollView style={{}}>
          <View style={styles.statsContainer}>
            <Text style={styles.statsHeader}>As a Rider</Text>
            <StatItem
              label="My Rating"
              value={userDetails.riderStats.averageRating}
            />
            <StatItem
              label="Total Trips"
              value={userDetails.riderStats.totalTrips}
            />
            <StatItem
              label="Passengers"
              value={userDetails.riderStats.passengersCount}
            />
            <StatItem
              label="Credits Earned"
              value={userDetails.riderStats.creditsEarned}
            />
            <StatItem
              label="KMs Travelled"
              value={`${userDetails.riderStats.kmsTravelled} km`}
            />
          </View>

          <View style={styles.statsContainer}>
            <Text style={styles.statsHeader}>As a Tag Along</Text>
            <StatItem
              label="Trips Completed"
              value={userDetails.tagAlongStats.tripsCompleted}
            />
            <StatItem
              label="KMs Travelled"
              value={`${userDetails.tagAlongStats.kmsTravelled} km`}
            />
          </View>

          <TouchableOpacity style={[styles.button, styles.editProfileButton]}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.changePasswordButton]}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.linkPTVButton]}>
        <Text style={styles.buttonText}>Link My PTV</Text>
      </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.logoutButton]}
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'InitialLanding'}],
              })
            }>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
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
    marginBottom: 80,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004D4D',
    marginBottom: 5,
  },
  dateRegistered: {
    fontSize: 14,
    color: '#004D4D',
    marginBottom: 20,
  },
  profileInfo: {
    
    // padding: 20,
    
  },
  editProfileButton: {
    backgroundColor: '#004D4D', // Dark green for Edit Profile
  },
  changePasswordButton: {
    backgroundColor: '#00796B', // Teal for Change Password
  },
  linkPTVButton: {
    backgroundColor: '#00ACC1', // Light blue for Link My PTV
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004D4D',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  statsContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
  },
  statsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004D4D',
    marginBottom: 10,
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statLabel: {
    fontSize: 14,
    color: '#666666',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004D4D',
  },
  button: {
    backgroundColor: '#004D4D',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#FF6B6B',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
