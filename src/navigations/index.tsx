import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { AlbumStack } from './AlbumStack';
import { AuthStack } from './AuthStack';
import { navigationRef } from 'navigations/utils';
import { AuthState } from 'features/auth/redux/types';

const RootNavigation = () => {
  const auth = useSelector((state: AuthState) => state.auth);

  return (
    <NavigationContainer ref={navigationRef}>
      {auth?.accessToken ? <AlbumStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
