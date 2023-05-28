import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeScreen, SettingScreen} from '../screens';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
const Tab = createMaterialBottomTabNavigator();

function MainNavigation() {
  return (
    <Tab.Navigator activeColor="green" inactiveColor="gray">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => {
            return <Icon name="home" color={color} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => {
            return <Icon name="settings" color={color} size={25} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default MainNavigation;
