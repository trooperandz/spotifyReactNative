import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import * as RootNavigation from 'navigations/utils';
import { AlbumCard, ALBUM_CARD_TEST_ID } from '../index';

jest.mock('navigations/utils');

const defaultProps = {
  albumName: 'album',
  artistName: 'artist',
  id: 'id',
  imageUrl: 'image.com',
  releaseDate: '2020-02-01',
};

const renderComponent = () => render(<AlbumCard {...defaultProps} />);

describe('AlbumCard', () => {
  it('should render the correct album title and description', () => {
    const { getByText } = renderComponent();

    expect(getByText(defaultProps.albumName)).toBeDefined();
    expect(
      getByText(
        `${defaultProps.artistName} | ${defaultProps.releaseDate.slice(0, 4)}`,
      ),
    ).toBeDefined();
  });

  it('should call navigate with the correct params if the card is pressed', () => {
    const { getByTestId } = renderComponent();

    fireEvent.press(getByTestId(ALBUM_CARD_TEST_ID));
    expect(RootNavigation.navigate).toHaveBeenCalledWith('AlbumNotes', {
      albumId: defaultProps.id,
      albumName: defaultProps.albumName,
      artistName: defaultProps.artistName,
    });
  });
});
