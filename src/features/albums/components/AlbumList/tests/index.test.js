import React from 'react';
import { render } from '@testing-library/react-native';

import { AlbumList } from '../index';
import { ALBUM_CARD_TEST_ID } from 'features/albums/components/AlbumCard';

export const defaultProps = {
  albums: [
    {
      album: {
        artists: [
          {
            name: 'test1',
          },
        ],
        id: '1',
        images: [
          {
            url: 'url',
          },
          {
            url: 'url',
          },
          {
            url: 'url',
          },
        ],
        name: 'test1',
        release_date: '2020-02-01',
      },
    },
    {
      album: {
        artists: [
          {
            name: 'test2',
          },
        ],
        id: '1',
        images: [
          {
            url: 'url',
          },
          {
            url: 'url',
          },
          {
            url: 'url',
          },
        ],
        name: 'test2',
        release_date: '2020-02-01',
      },
    },
  ],
};

const renderComponent = () => render(<AlbumList {...defaultProps} />);

describe('AlbumList', () => {
  it('should render a list of the correct number of cards', () => {
    const { getAllByTestId } = renderComponent();

    expect(getAllByTestId(ALBUM_CARD_TEST_ID)).toHaveLength(
      defaultProps.albums.length,
    );
  });
});
