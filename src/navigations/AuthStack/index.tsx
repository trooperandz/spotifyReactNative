import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthStackParamList } from './types';
import { Login } from 'features/auth/screens/Login';
import { colors } from 'utils/colors';

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Spotify Authentication',
          headerTitleStyle: { color: colors.primary },
        }}
      />
    </Stack.Navigator>
  );
};
