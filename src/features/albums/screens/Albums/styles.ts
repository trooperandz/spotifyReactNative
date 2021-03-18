import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';

export const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 40,
    width: 200,
    height: 42,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundPrimary,
  },
  safeArea: {
    flex: 1,
  },
});
