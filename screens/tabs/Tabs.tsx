import {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FirstTab} from './FirstTab.tsx';
import {SecondTab} from './SecondTab.tsx';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NestedFirstTab} from './NestedFirstTab.tsx';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export enum First_Tab_Screens {
  FIRST_SCREEN = 'FirstScreen',
  NESTED_SCREEN = 'NestedScreen',
}

const FirstTabScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={First_Tab_Screens.FIRST_SCREEN}
        component={FirstTab}
      />
      <Stack.Screen
        name={First_Tab_Screens.NESTED_SCREEN}
        component={NestedFirstTab}
      />
    </Stack.Navigator>
  );
};
const Tabs: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveBackgroundColor: 'pink'}}>
      <Tab.Screen name={'FirstTab'} component={FirstTabScreens} />
      <Tab.Screen name={'SecondTab'} component={SecondTab} />
    </Tab.Navigator>
  );
};

export {Tabs};
