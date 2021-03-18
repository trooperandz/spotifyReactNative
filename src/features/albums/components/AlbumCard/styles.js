import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';

export const styles = StyleSheet.create({
  albumInfo: {
    marginHorizontal: 40,
  },
  albumName: {
    fontSize: 20,
    color: colors.primary,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 12,
    backgroundColor: colors.surfacePrimary,
    borderRadius: 8,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  image: {
    height: 64,
    width: 64,
  },
});
