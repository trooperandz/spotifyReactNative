import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AlbumStackParamList } from './types';
import Albums from 'features/albums/screens/Albums';
import AlbumNotes from 'features/albums/screens/AlbumNotes';

const Stack = createStackNavigator<AlbumStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Albums">
      <Stack.Screen
        name="Albums"
        component={Albums}
        options={{
          title: 'Albums',
          headerTitleStyle: { color: '#787878' },
        }}
      />
      <Stack.Screen
        name="AlbumNotes"
        component={AlbumNotes}
        options={{
          title: 'Album Notes',
          headerTitleStyle: { color: '#787878' },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
