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
  buttonLargeText:{
    color: '#004D4D',
    fontSize: 18,
    lineHeight: 24,
    fontWeight:'700',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  plainBoldFont: {
    fontWeight: '700'
  },
  
});
export default defaultStyles