import React from 'react';
import { View, Button } from 'react-native';

import { onLogin } from 'features/auth/utils/auth';

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => onLogin()} title="Log In" />
    </View>
  );
};

export default LoginScreen;
