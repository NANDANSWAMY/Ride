/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
	StyleSheet,
	View,
	Pressable,
	Text,
	Animated,
	StatusBar,
	Platform,
	BackHandler,
	Dimensions,
	// VersionInfo
  } from 'react-native';
  import DeviceInfo from 'react-native-device-info';
  import defaultStyles from '../utilities/defaultStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import { GotIcon } from '../assets/Icons';

// const height = Dimensions.get('window').height;
const InitialLanding = ({navigation}) => {
	const versionNumber = DeviceInfo.getVersion();
  const buildNumber = DeviceInfo.getBuildNumber();
  console.log(versionNumber)

  return (
    <>
	<StatusBar hidden={false} backgroundColor={'#000080'} barStyle={'light-content'} />
      <SafeAreaView
        style={{flex: 0, backgroundColor: '#B3E5FC'}}
        edges={['top']}
      />
	 
		 <View style={styles.getStartedLogo}>
			<GotIcon/>
		</View>
		<View style={styles.titleArea}>
			<Text style={styles.mainTitleText}>Get on Track</Text>
			<Text style={styles.secondTitleText}>Tag Along / Pick Someone  </Text>
		</View>
		<View
          style={{
            // backgroundColor: 'red',
            alignItems: 'center',
            // marginBottom: 42,
            marginTop: 30
          }}
        >
          <Text style={styles.versionNumber}>
            Version {versionNumber}{(buildNumber)}
          </Text>
        </View>
		<View style={styles.loginButton}>
		<Pressable style={[defaultStyles.buttonLarge]} onPress={()=>{
			console.log('1111')
			navigation.push('Home')
		}}>
			<Text style={defaultStyles.buttonLargeText}>Login</Text>
		</Pressable>
		</View>
		  

    </>
  );
};

const styles = StyleSheet.create({
	getStartedLogo: {
		alignItems: 'center',
		// paddingTop: 10,
		// paddingTop: '0%',
		marginTop: (Dimensions.get('window').height * 80) / 780,
		// paddingBottom: '20%',
	},
	titleArea:{
		alignItems: 'center',
		marginTop: 20
	},
	mainTitleText:{
		fontSize: 49,
		lineHeight:58,
		fontWeight:'600',
		color:'#004D4D'
	},
	secondTitleText:{
		fontSize: 18,
		lineHeight:30,
		fontWeight:'600',
		marginTop:15,
		color:'#008080'
	},
	versionNumber:{
		fontSize: 18,
		lineHeight:30,
		fontWeight:'600',
		marginTop:15,
		color:'#008080'
	},
	loginButton:{
		bottom: Platform.OS === 'android' ? 15 : 25,
		position: 'absolute',
		paddingLeft: 23,
		paddingRight: 23,
		width:'100%'
	}
	
	


})

export default InitialLanding;
