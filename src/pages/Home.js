/* eslint-disable no-mixed-spaces-and-tabs */
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
  BackHandler,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import defaultStyles from '../utilities/defaultStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import { getInitials } from '../utilities/helpers';
import FooterMenu from '../components/FooterMenu'
const Home = ({navigation}) => {
  const versionNumber = DeviceInfo.getVersion();
//   const buildNumber = DeviceInfo.getBuildNumber();
  console.log(versionNumber);
  const userDetails={
	"userFullName":"Nandan Krishnappa"
  }

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
	  	<View style={styles.container}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text style={[defaultStyles.plainBoldFont, defaultStyles.h1Font]}>Hi, Nandan</Text>
				<View style={{ flex: 1 }}></View>
				<View
				style={{
					width: 45,
					height: 45,
					borderRadius: 30,
					borderWidth: 1.5,
					borderColor: '#004D4D',
					backgroundColor: '#AFEEEE',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				>
				<Text style={{ fontFamily: 'Mulish-Bold', fontSize: 12, lineHeight: 19.2, color:'004D4D' }}>
					{getInitials(userDetails.userFullName)}
				</Text>
				</View>
			</View>

		</View>
		<View style={defaultStyles.footerMenu}>
			<FooterMenu navigation={navigation}/>
		</View>
		
	
    </>
  );
};
export default Home
const styles = StyleSheet.create({
	container:{
		marginLeft:20,
		marginTop:30,
		marginRight:20,
		backgroundColor: '#CCFFFF',

	},
	nameLoc: {
		paddingTop: '10%',
		paddingLeft: 0,
	},
	locationText: {
		color: '#051359',
		fontSize: 16,
		lineHeight: 24,
		paddingTop: 16,
		// paddingBottom: 10,
		// fontWeight: '400',
	},
	
});
