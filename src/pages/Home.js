/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getInitials} from '../utilities/helpers';
import FooterMenu from '../components/FooterMenu';

const Home = ({navigation}) => {
  const userDetails = {
    userFullName: 'Nandan Krishnappa',
  };

  const stats = [
    {label: 'Total Users', value: '10,000'},
    {label: 'Live Riders', value: '250'},
    {label: 'Live Tag Alongs', value: '180'},
    {label: 'Users Nearby', value: '50'},
    {label: 'Trips Completed', value: '5,000'},
    {label: 'Avg. Riders/Trip', value: '3'},
    {label: 'Total Credits Earned', value: '1,200'},
    {label: 'Total KMS Covered', value: '15,000'},
	{label:'Footscray Train Station', value:'Most common pick up point'},
	{label:'Ballarat Train Station', value:'Most common drop point'}
  ];

  const StatBox = ({label, value}) => (
    <TouchableOpacity style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <>
	{/* <SafeAreaView style={styles.container} /> */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {/*  */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.name}>{userDetails.userFullName}</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileInitials}>
            {getInitials(userDetails.userFullName)}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.statsTitle}>App Statistics</Text>

        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <StatBox key={index} label={stat.label} value={stat.value} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footerMenu}>
        <FooterMenu navigation={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#E1F5FE', // Light blue background color
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#004D4D',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004D4D',
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#004D4D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Space for footer
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004D4D',
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statBox: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004D4D',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666666',
  },
  footerMenu: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
});

export default Home;
