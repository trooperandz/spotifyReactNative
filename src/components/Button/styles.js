import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonPrimary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 22,
    minWidth: 120,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});
