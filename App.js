import 'react-native-gesture-handler';
import React from 'react';

import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HeaderBackButton } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="albumList"
        component={AlbumList}
        options={{
          title: 'Albums',
          headerLeft: () => (
            <Icon name="music" style={{marginLeft:10}} size={30} color="rgb(0, 122, 255)" />
          ),
        }}
      />
      <Stack.Screen
        name="photoList"
        component={PhotoList}
        options={{
          title: 'Photos',
          headerLeft: () => (
            <Icon name="camera" style={{marginLeft:10}} size={30} color="rgb(0, 122, 255)" />
          ),
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}