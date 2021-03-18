import React, { FC } from 'react';

import { FlatList } from 'react-native';

import { Album } from 'features/albums/redux/types';
import { AlbumCard } from '../AlbumCard';
import { styles } from './styles';

type Props = {
  albums: Album[];
};

export const AlbumList: FC<Props> = props => (
  <FlatList
    contentContainerStyle={styles.contentContainer}
    data={props.albums}
    keyExtractor={item => item.album.name}
    renderItem={({ item }: { item: Album }) => {
      const { album } = item;

      return (
        <AlbumCard
          albumName={album.name}
          artistName={album.artists[0].name}
          id={album.id}
          imageUrl={album.images[2].url}
          releaseDate={album.release_date}
        />
      );
    }}
  />
);
