import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import LandingPage from './src/pages/LandingPage';
import Homepage from './src/pages/Homepage';
import InitialLanding from './src/pages/InitialLanding';
import Home from './src/pages/Home';
import SearchPage from './src/pages/SearchPage';
import ProfilePage from './src/pages/Profile';
import Bookings from './src/pages/Bookings';
import SetPath from './src/pages/SetPath';
import LookRidePath from './src/pages/LookRidePath';
// import HomeScreen from './HomeScreen'; // We'll create this next

const Stack = createStackNavigator();
// new commit
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="InitialLanding">
          <Stack.Screen
            name="InitialLanding"
            component={InitialLanding}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Landing"
            component={LandingPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Homepage"
            component={Homepage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchPage"
            component={SearchPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfilePage"
            component={ProfilePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Bookings"
            component={Bookings}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SetPath"
            component={SetPath}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LookRidePath"
            component={LookRidePath}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
