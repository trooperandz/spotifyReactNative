import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Button } from 'react-native';

import { authorizeSpotify } from 'features/auth/utils/auth';
import { setAccessToken, setRefreshToken } from 'features/auth/redux/authSlice';

const Login = () => {
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  console.log('auth redux state: ', auth);

  const handleLoginPress = async () => {
    const authObject = await authorizeSpotify();
    console.log({ authObject });
    dispatch(setAccessToken({ accessToken: authObject?.accessToken }));
    dispatch(setRefreshToken({ refreshToken: authObject?.refreshToken }));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={handleLoginPress} title="Log In" />
    </View>
  );
};

export default Login;
