import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface Props {
  albumName: string;
  artistName: string;
  id: string;
  imageUrl: string;
  releaseDate: string;
}

const AlbumCard = (props: Props) => {
  const { albumName, artistName, id, imageUrl, releaseDate } = props;

  const handlePress = () => {
    // TODO: navigate to AlbumNotes screen using id
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.image}>
        <Image source={{ uri: imageUrl }} width={64} height={64} />
      </View>
      <View style={styles.albumInfo}>
        <Text style={styles.albumName}>{albumName}</Text>
        <Text>{artistName}</Text>
        <Text>{releaseDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AlbumCard;
