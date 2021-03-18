import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';

export const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
