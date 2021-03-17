import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { Album } from 'features/albums/redux/types';
import AlbumCard from '../AlbumCard';

type Props = {
  albums: Album[];
};

const AlbumList = (props: Props) => {
  return (
    <FlatList
      contentContainerStyle={{ padding: 24 }}
      data={props.albums}
      renderItem={({ item }: { item: Album }) => (
        <AlbumCard
          albumName={item.album.name}
          artistName={item.album.artists[0].name}
          id={item.album.id}
          imageUrl={item.album.images[2].url}
          releaseDate={item.album.release_date}
        />
      )}
    />
  );
};

export default AlbumList;
