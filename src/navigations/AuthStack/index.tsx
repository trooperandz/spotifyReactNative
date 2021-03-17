import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthStackParamList } from './types';
import Login from 'features/auth/screens/Login';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Spotify Login',
          headerTitleStyle: { color: '#787878' },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
