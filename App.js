import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RecordScreen from './src/screens/RecordScreen';
import PlayerScreen from './src/screens/PlayerScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Player') {
              iconName = focused
                ? 'play-circle'
                : 'play-circle-outline';
            } else if (route.name === 'Record') {
              iconName = focused ? 'stop-circle' : 'stop-circle-outline';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#333',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Player" component={PlayerScreen} />
        <Tab.Screen name="Record" component={RecordScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}