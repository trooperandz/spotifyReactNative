import React, { FC } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
  children: string;
  isLoading?: boolean;
  onPress: () => void;
  style?: { [key: string]: string | number };
};

export const BUTTON_TEST_ID = 'button';
export const SPINNER_TEST_ID = 'button-spinner';

export const Button: FC<Props> = props => {
  const { children, isLoading, onPress, style } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      testID={BUTTON_TEST_ID}>
      {isLoading ? (
        <ActivityIndicator color="#fff" size="small" testID={SPINNER_TEST_ID} />
      ) : (
        <Text style={styles.text}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};
