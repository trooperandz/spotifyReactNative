import { StyleSheet } from 'react-native';

import { colors } from 'utils/colors';

export const styles = StyleSheet.create({
  button: {
    marginTop: 24,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
    paddingHorizontal: 32,
  },
  infoText: {
    color: colors.textSecondary,
    marginVertical: 2,
    marginLeft: 8,
  },
  input: {
    marginTop: 24,
    padding: 12,
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
  },
  sectionTitle: {
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.textPrimary,
  },
  separator: {
    marginVertical: 12,
    height: 1,
    width: '100%',
    backgroundColor: '#eeeeee',
  },
});
