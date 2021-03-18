import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, SafeAreaView } from 'react-native';

import { AlbumList } from 'features/albums/components/AlbumList';
import { Button } from 'components/Button';
import { setAccessToken } from 'features/auth/redux/authSlice';
import { getUserAlbums } from 'features/albums/redux/albumSlice';
import { AlbumsState } from 'features/albums/redux/types';
import { styles } from './styles';

export const LOADER_TEST_ID = 'loader';

export const Albums: FC = () => {
  const dispatch = useDispatch();
  const { albumList } = useSelector((state: AlbumsState) => state.albums);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getUserAlbums(() => setIsLoading(false)));
  }, [dispatch]);

  const handleLogOut = () => dispatch(setAccessToken({ accessToken: '' }));

  return (
    <SafeAreaView style={styles.safeArea}>
      {isLoading ? (
        <View style={styles.container} testID={LOADER_TEST_ID}>
          <Text>Loading...</Text>
        </View>
      ) : (
        <AlbumList albums={albumList} />
      )}
      <Button onPress={handleLogOut} style={styles.button}>
        Log Out
      </Button>
    </SafeAreaView>
  );
};
