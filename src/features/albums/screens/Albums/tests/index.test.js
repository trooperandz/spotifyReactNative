import React from 'react';
import axios from 'axios';

import { Albums, LOADER_TEST_ID } from '../index';
import { defaultProps } from 'features/albums/components/AlbumList/tests/index.test';
import { ALBUM_CARD_TEST_ID } from 'features/albums/components/AlbumCard';
import { renderWithProvider } from 'utils/testUtils';

jest.mock('axios');

const renderComponent = state => renderWithProvider(<Albums />, state);

describe('Albums', () => {
  it('should render the loader if the albums have not loaded yet', () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { items: [] } }),
    );
    const { getByTestId } = renderComponent({ albums: { albumList: [] } });

    expect(getByTestId(LOADER_TEST_ID)).toBeDefined();
  });

  it('should render the list of albums if the albums have loaded', () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { items: defaultProps.albums } }),
    );

    const { getAllByTestId } = renderComponent({
      albums: { albumList: defaultProps.albums },
    });

    expect(getAllByTestId(ALBUM_CARD_TEST_ID)).toHaveLength(
      defaultProps.albums.length,
    );
  });
});
