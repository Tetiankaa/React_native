/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {} from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home.tsx';
import Users from './screens/Users.tsx';
import {Routes} from './routes/Routes.ts';
import UserPosts from './screens/UserPosts.tsx';

const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'pink',
          },
          headerTintColor: '#752c2c',
          headerTitleStyle: {
            fontWeight: '800',
          },
        }}
        initialRouteName={Routes.USERS}>
        <Stack.Screen name={Routes.HOME} component={Home} />
        <Stack.Screen name={Routes.USERS} component={Users} />
        <Stack.Screen name={Routes.USER_POSTS} component={UserPosts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
