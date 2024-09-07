/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Button, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
function LandingPage({navigation}) {
  return (
    <>
      <SafeAreaView
        style={{flex: 0, backgroundColor: '#4575E5'}}
        edges={['top']}
      />
      <StatusBar
        hidden={false}
        backgroundColor={'#4575E5'}
        barStyle={'light-content'}
      />
      <View>
        <Text>Welcome to My App</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Homepage')}
        />
        <View style={styles.mapContainer}> 
        <MapView
  initialRegion={{
    latitude: -33.868820,
    longitude: 151.209295,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  style={{ width: '100%', height: '100%' }}
>
  <Marker
    coordinate={{
      latitude: -33.868820,
      longitude: 151.209295,
    }}
    title="Sydney"
    description="New South Wales, Australia"
  />
</MapView>
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapContainer: {
    width: '100%',
    height: 400, // Adjust the height as needed
    marginTop: 20,
  },
});

export default LandingPage;
