/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {StyleSheet, Platform, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;
const defaultStyles = StyleSheet.create({
  h1Font: {
    fontSize: 30,
    lineHeight: 42,
    color: '#051359',
  },
  headingText:{
    fontSize:30,
    lineHeight:35,
    color: '#051359',
    marginLeft:8
  },

  buttonLarge:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99FFFF',
    borderRadius: 40,
    width: '100%',
    height: (60 * windowHeight) / 780,
  },
  buttonLargeSoft:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98FF98',
    borderRadius: 40,
    width: '100%',
    height: (60 * windowHeight) / 780,
  },
  buttonLargeBrave:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007FFF',
    borderRadius: 40,
    width: '100%',
    height: (60 * windowHeight) / 780,
  },
  buttonLargeFav:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#004D40',
    borderRadius: 40,
    width: '100%',
    height: (60 * windowHeight) / 780,
  },
  buttonLargeText:{
    color: '#004D4D',
    fontSize: 18,
    lineHeight: 24,
    fontWeight:'700',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  buttonLargeBraveText:{
    color: '#000000',
    fontSize: 18,
    lineHeight: 24,
    fontWeight:'700',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  buttonLargeSoftText:{
    color: '#2C3E50',
    fontSize: 18,
    lineHeight: 24,
    fontWeight:'700',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  buttonLargeFavText:{
    color: '#FFF',
    fontSize: 18,
    lineHeight: 24,
    fontWeight:'700',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  plainBoldFont: {
    fontWeight: '700'
  },
  footerMenu:{
		bottom: Platform.OS === 'android' ? 15 : 25,
		position: 'absolute',
		// paddingLeft: 23,
		// paddingRight: 23,
		width:'100%'
	}
  
});
export default defaultStyles