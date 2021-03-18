import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { View, SafeAreaView } from 'react-native';

import { Button } from 'components/Button';
import { authorizeSpotify } from 'features/auth/utils/auth';
import { setAccessToken, setRefreshToken } from 'features/auth/redux/authSlice';
import { styles } from './styles';

export const Login: FC = () => {
  const dispatch = useDispatch();

  const handleLoginPress = async () => {
    const authObject = await authorizeSpotify();
    dispatch(setAccessToken({ accessToken: authObject?.accessToken }));
    dispatch(setRefreshToken({ refreshToken: authObject?.refreshToken }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Button onPress={handleLoginPress} style={styles.button}>
          Log In With Spotify
        </Button>
      </View>
    </SafeAreaView>
  );
};
