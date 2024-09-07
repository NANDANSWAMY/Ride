/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform,Pressable, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FooterMenu from '../components/FooterMenu';
import defaultStyles from '../utilities/defaultStyles';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import axios from 'axios'
import configData from '../../config.json'


// Replace the hardcoded API key with the imported variable
const API_KEY =configData.API_KEY;
// const API_KEY = 'AIzaSyDbqGWohsyJJiJRIWytGjJrG7GCchk5LLE';

const {width, height} = Dimensions.get('window');

const SearchPage = ({navigation, pMP=null, dMP=null, rc=[]}, pL=null) => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [favClicked, setFavClicked] = useState(false)

  const [pickupMarkerPosition, setPickupMarkerPosition] = useState(pMP??null);
  const [destinationMarkerPosition, setDestinationMarkerPosition] = useState(dMP??null);
  const mapRef = useRef(null);
  const [showMap, setShowMap] = useState(false);
  const [routeCoordinates, setRouteCoordinates] = useState(rc.length>=1??[]);
  const [pLoc, setPLoc] = useState(pL??null)
  const [dLoc, setDLoc] = useState(pL??null)
  const getRouteCoordinates = async (startLoc, destLoc) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destLoc}&key=${API_KEY}`
      );
      const points = decodePolyline(response.data.routes[0].overview_polyline.points);
      setRouteCoordinates(points);
    } catch (error) {
      console.error('Error fetching route', error);
    }
  };
  const decodePolyline = (t, e = 5) => {
    let points = [];
    let index = 0,
      lat = 0,
      lng = 0;

    while (index < t.length) {
      let b, shift = 0,
        result = 0;
      do {
        b = t.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlat = ((result & 1) !== 0 ? ~(result >> 1) : result >> 1);
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = t.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlng = ((result & 1) !== 0 ? ~(result >> 1) : result >> 1);
      lng += dlng;

      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }

    return points;
  };

  const zoomIn = () => {
    setRegion(prevRegion => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta / 2,
      longitudeDelta: prevRegion.longitudeDelta / 2,
    }));
  };

  const zoomOut = () => {
    setRegion(prevRegion => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta * 2,
      longitudeDelta: prevRegion.longitudeDelta * 2,
    }));
  };

  const IndicatorCircle = ({color='green'}) => (
    <View style={[styles.greenCircle, {backgroundColor:color}]} />
  );

  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#B3E5FC'}} edges={['top']} />
      <View style={styles.container}>
        <Text style={styles.pageHeaderStyle}>Select Address</Text>
        <ScrollView style={{marginBottom:100}}>
        <View style={styles.searchAndMapContainer}>
  {/* Pickup Location */}
  <View style={styles.autocompleteWrapper}>
    <GooglePlacesAutocomplete
      placeholder="Search pick up location"
      onPress={(data, details = null) => {
        if (details) {
          
          const {lat, lng} = details.geometry.location;
          setPLoc(details.formatted_address)
          const newRegion = {
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          };
          setRegion(newRegion);
          setPickupMarkerPosition({latitude: lat, longitude: lng});
          setShowMap(true);
        }
      }}
      query={{
        key: API_KEY,
        language: 'en',
      }}
      fetchDetails={true}
      textInputProps={{
        onChangeText: text => {
          if (text === '') {
            setShowMap(false);
          }
        },
      }}
      styles={{
        container: styles.autocompleteContainer,
        textInputContainer: styles.searchInputContainer,
        textInput: styles.searchInput,
      }}
      renderLeftButton={() => <IndicatorCircle />}
    />
  </View>

  {/* Destination Location */}
  <View style={styles.autocompleteWrapper}>
    <GooglePlacesAutocomplete
      placeholder="Search destination location"
      onPress={(data, details = null) => {
        if (details) {
          const {lat, lng} = details.geometry.location;
          setDLoc(details.formatted_address)
          setDestinationMarkerPosition({latitude: lat, longitude: lng});
          if (pickupMarkerPosition) {
            const startLoc = `${pickupMarkerPosition.latitude},${pickupMarkerPosition.longitude}`;
            const destLoc = `${lat},${lng}`;
            getRouteCoordinates(startLoc, destLoc);
          }
        }
        
      }}
      query={{
        key: API_KEY,
        language: 'en',
      }}
      fetchDetails={true}
      styles={{
        container: styles.autocompleteContainer,
        textInputContainer: styles.searchInputContainer,
        textInput: styles.searchInput,
      }}
      renderLeftButton={() => <IndicatorCircle color='orange'/>}
      textInputProps={{
        onChangeText: (text) => {
          if (text === '') {
            setDestinationMarkerPosition(null);
          }
        },
      }}
    />
  </View>

  {/* Map Section */}
  {showMap && (
    <View style={styles.mapContainer}>
      <MapView ref={mapRef} style={styles.map} region={region}>
        {pickupMarkerPosition && <Marker coordinate={pickupMarkerPosition} />}
        {destinationMarkerPosition && <Marker coordinate={destinationMarkerPosition} pinColor="blue" />}
        {routeCoordinates.length > 0 && pickupMarkerPosition && destinationMarkerPosition&& (
                  <Polyline coordinates={routeCoordinates} strokeColor="#000" strokeWidth={3} />
                )}
      </MapView>
      <View style={styles.zoomButtonsContainer}>
        <TouchableOpacity style={styles.zoomButton} onPress={zoomIn}>
          <Text style={styles.zoomButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zoomButton} onPress={zoomOut}>
          <Text style={styles.zoomButtonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
</View>
{destinationMarkerPosition &&pickupMarkerPosition &&routeCoordinates.length>0 &&
<>
<View style={styles.addFav}>
		<Pressable style={[defaultStyles.buttonLargeFav, {backgroundColor:favClicked?'#004D40':'#333333'}]} onPress={()=>{
			setFavClicked(true)
		}}>
			<Text style={defaultStyles.buttonLargeFavText}>{favClicked?'Added to Favroites':'Add Favorite'}</Text>
		</Pressable>
		</View>
    <View style={styles.saveButton}>
		<Pressable style={[defaultStyles.buttonLargeSoft]} onPress={()=>{
			navigation.push('LookRidePath',{
        pMP:pickupMarkerPosition,
        dMP:destinationMarkerPosition,
        rC:routeCoordinates,
        pickLoc:pLoc,
        dropLoc:dLoc



      })
		}}>
			<Text style={defaultStyles.buttonLargeSoftText}>I rock along</Text>
		</Pressable>
		</View>
    <View style={styles.saveButton}>
		<Pressable style={[defaultStyles.buttonLargeBrave]} onPress={()=>{
      navigation.push('SetPath',{
        pMP:pickupMarkerPosition,
        dMP:destinationMarkerPosition,
        rC:routeCoordinates,
        pickLoc:pLoc,
        dropLoc:dLoc


      })
		}}>
			<Text style={defaultStyles.buttonLargeBraveText}>I'm a Rider</Text>
		</Pressable>
		</View>
    </>
}
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
  },
  pageHeaderStyle: {
    fontSize: 30,
    lineHeight: 42,
    color: '#051359',
    marginLeft: 14,
    marginTop: 8,
    marginBottom:10
  },
  searchAndMapContainer: {
    flex: 1,
    marginHorizontal: 12,
  },
  autocompleteWrapper: {
    marginBottom: 10, // Space between the search fields
  },
  autocompleteContainer: {
    flex: 0,
  },
  searchInputContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    height: 44,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
  },
  greenCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    // backgroundColor: 'green',
    marginLeft: 0,
    marginRight: 8,
    marginTop:18
  },
  mapContainer: {
    flex: 1, // Ensures map takes remaining space below search inputs
    height: 400, // Specify map height to avoid overlap
    marginTop: 10, // Adds some space between destination field and map
  },
  map: {
    width: '100%',
    height: 400,
  },
  zoomButtonsContainer: {
    right: 10,
    top:10,
    position: 'absolute',
  },
  addFav:{
		
		paddingLeft: 23,
    marginTop:20,
		paddingRight: 23,
		width:'100%'
	},
  saveButton:{
		
		paddingLeft: 23,
    marginTop:20,
		paddingRight: 23,
		width:'100%'
	}
});

export default SearchPage;
