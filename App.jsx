import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import LandingPage from './src/pages/LandingPage';
import Homepage from './src/pages/Homepage';
// import HomeScreen from './HomeScreen'; // We'll create this next

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
