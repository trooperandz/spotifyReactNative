import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import AlbumList from 'features/albums/components/AlbumList';
import { getUserAlbums } from 'features/albums/redux/albumSlice';

const Albums = () => {
  const dispatch = useDispatch();
  const { albumList } = useSelector((state: any) => state.albums);

  useEffect(() => {
    dispatch(getUserAlbums());
  }, [dispatch]);

  return albumList.length > 0 ? (
    <AlbumList albums={albumList} />
  ) : (
    <View>
      <Text>{JSON.stringify(albumList[0])}</Text>
    </View>
  );
};

export default Albums;
