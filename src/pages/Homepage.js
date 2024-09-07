/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
// eslint-disable-next-line prettier/prettier
import MapView, {Marker, Polyline} from 'react-native-maps';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import polyline from '@mapbox/polyline';
import configData from '../../config.json'


// Replace the hardcoded API key with the imported variable
const API_KEY =configData.API_KEY;


const HomePage = ({navigation}) => {
	const [startLocation, setStartLocation] = useState('');
	const [endLocation, setEndLocation] = useState('');
	const [intermediateLocation, setIntermediateLocation] = useState('');
	const [region, setRegion] = useState({
	  latitude: -33.868820,
	  longitude: 151.209295,
	  latitudeDelta: 0.0922,
	  longitudeDelta: 0.0421,
	});
	const [markers, setMarkers] = useState([]);
	const [routeCoordinates, setRouteCoordinates] = useState([]);
	const backFn=()=>{
			navigation.goBack()
	}
  
	// const getRoute = async () => {
	//   try {
	// 	const response = await axios.get(
	// 	  `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
	// 		startLocation
	// 	  )}&destination=${encodeURIComponent(
	// 		endLocation
	// 	  )}&key=${API_KEY}`
	// 	);
	// 	console.log(response)
  
	// 	if (response.data.routes.length) {
	// 	  const route = response.data.routes[0];
	// 	  const decodedPoints = polyline.decode(route.overview_polyline.points);
	// 	  const routeCoords = decodedPoints.map(point => ({
	// 		latitude: point[0],
	// 		longitude: point[1],
	// 	  }));
  
	// 	  setRouteCoordinates(routeCoords);
	// 	  setMarkers([
	// 		{ coordinate: routeCoords[0], title: 'Start' },
	// 		{ coordinate: routeCoords[routeCoords.length - 1], title: 'End' },
	// 	  ]);
  
	// 	  // Adjust map to fit the route
	// 	  setRegion({
	// 		latitude: routeCoords[0].latitude,
	// 		longitude: routeCoords[0].longitude,
	// 		latitudeDelta: Math.abs(routeCoords[0].latitude - routeCoords[routeCoords.length - 1].latitude) * 1.5,
	// 		longitudeDelta: Math.abs(routeCoords[0].longitude - routeCoords[routeCoords.length - 1].longitude) * 1.5,
	// 	  });
	// 	}
	//   } catch (error) {
	// 	console.error('Error fetching route:', error);
	//   }
	// };
	const getRoute = async () => {
		try {
		  const waypointParam = intermediateLocation ? `&waypoints=${encodeURIComponent(intermediateLocation)}` : '';
		  const response = await axios.get(
			`https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
			  startLocation
			)}&destination=${encodeURIComponent(
			  endLocation
			)}${waypointParam}&key=${API_KEY}`
		  );
	  
		  if (response.data.routes.length) {
			const route = response.data.routes[0];
			const decodedPoints = polyline.decode(route.overview_polyline.points);
			const routeCoords = decodedPoints.map(point => ({
			  latitude: point[0],
			  longitude: point[1],
			}));
	  
			setRouteCoordinates(routeCoords);
			
			// Update markers to include the intermediate point
			const markers = [
			  { coordinate: routeCoords[0], title: 'Start' },
			  { coordinate: routeCoords[routeCoords.length - 1], title: 'End' },
			];
	  
			if (intermediateLocation) {
			  const middleIndex = Math.floor(routeCoords.length / 2);
			  markers.splice(1, 0, { coordinate: routeCoords[middleIndex], title: 'Intermediate' });
			}
	  
			setMarkers(markers);
	  
			// Adjust map to fit the route (same as before)
			setRegion({
			  latitude: routeCoords[0].latitude,
			  longitude: routeCoords[0].longitude,
			  latitudeDelta: Math.abs(routeCoords[0].latitude - routeCoords[routeCoords.length - 1].latitude) * 1.5,
			  longitudeDelta: Math.abs(routeCoords[0].longitude - routeCoords[routeCoords.length - 1].longitude) * 1.5,
			});
		  }
		} catch (error) {
		  console.error('Error fetching route:', error);
		}
	  };
	return (
		<>
      <SafeAreaView
        style={{flex: 0, backgroundColor: '#4575E5'}}
        edges={['top']}
      />
	  <View>
		<Text onPress={()=>backFn()}>111</Text>
	  </View>
	  <View style={styles.container}>
		<View style={styles.inputContainer}>
		  <TextInput
			style={styles.input}
			value={startLocation}
			onChangeText={setStartLocation}
			placeholder="Start location"
		  />
		  <TextInput
  style={styles.input}
  value={intermediateLocation}
  onChangeText={setIntermediateLocation}
  placeholder="Intermediate location"
/>
		  <TextInput
			style={styles.input}
			value={endLocation}
			onChangeText={setEndLocation}
			placeholder="End location"
		  />
		  <Button title="Get Route" onPress={getRoute} />
		</View>
		<MapView
		  style={styles.map}
		  region={region}
		>
		  {markers.map((marker, index) => (
			<Marker
			  key={index}
			  coordinate={marker.coordinate}
			  title={marker.title}
			/>
		  ))}
		  <Polyline
			coordinates={routeCoordinates}
			strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
			strokeColors={['#7F0000']}
			strokeWidth={6}
		  />
		</MapView>
	  </View>
	  </>
	);
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  map: {
    flex: 1,
  },
});

export default HomePage;
