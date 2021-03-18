import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import axios from 'axios';

import { AuthState } from 'features/auth/redux/types';
import { AlbumsResponse } from './types';

const albumsSlice = createSlice({
  name: 'albums',
  initialState: {
    albumList: [],
  },
  reducers: {
    setAlbumList(state, action) {
      state.albumList = action.payload.albumList;
    },
  },
});

export const { setAlbumList } = albumsSlice.actions;

export const getUserAlbums = () => {
  return async (dispatch: Dispatch, getState: () => AuthState) => {
    try {
      const {
        auth: { accessToken },
      } = getState();

      const response: AlbumsResponse = await axios.get(
        'https://api.spotify.com/v1/me/albums',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            limit: 20,
          },
        },
      );

      dispatch(setAlbumList({ albumList: response.data.items }));
    } catch (error) {
      console.error(error);
    }
  };
};

export default albumsSlice.reducer;
