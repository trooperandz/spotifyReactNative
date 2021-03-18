import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import * as RootNavigation from 'navigations/utils';
import { styles } from './styles';

interface Props {
  albumName: string;
  artistName: string;
  id: string;
  imageUrl: string;
  releaseDate: string;
}

export const ALBUM_CARD_TEST_ID = 'album-card';

export const AlbumCard: FC<Props> = props => {
  const { albumName, artistName, id, imageUrl, releaseDate } = props;

  const handleCardPress = () => {
    RootNavigation.navigate('AlbumNotes', {
      albumId: id,
      albumName,
      artistName,
    });
  };

  return (
    <TouchableOpacity
      onPress={handleCardPress}
      style={styles.container}
      testID={ALBUM_CARD_TEST_ID}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.albumInfo}>
        <Text style={styles.albumName}>{albumName}</Text>
        <Text style={styles.description}>
          {artistName} | {releaseDate.slice(0, 4)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
