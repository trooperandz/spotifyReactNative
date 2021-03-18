import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { AlbumNotes, NOTES_TEST_ID, PLACEHOLDER_TEXT } from '../index';
import { BUTTON_TEST_ID } from 'components/Button';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ body: 'test', id: 101 }),
  }),
);

const defaultProps = {
  route: {
    params: {
      albumId: '123',
      albumName: 'test',
    },
  },
};

const renderComponent = () => render(<AlbumNotes {...defaultProps} />);

describe('AlbumNotes', () => {
  it('should render the album name', () => {
    const { getByText } = renderComponent();

    expect(getByText(defaultProps.route.params.albumName)).toBeDefined();
  });

  it('should not show the notes text if there are no notes recorded', () => {
    const { queryByTestId } = renderComponent();

    expect(queryByTestId(NOTES_TEST_ID)).toBeNull();
  });

  // TODO: get this working
  it.skip('should show the notes text if there were notes entered and submitted', async () => {
    const notesText = 'notes text';
    const { getByPlaceholderText, getByTestId, getByText } = renderComponent();

    fireEvent.changeText(getByPlaceholderText(PLACEHOLDER_TEXT), notesText);
    fireEvent.press(getByTestId(BUTTON_TEST_ID));
    await new Promise(r => setTimeout(r, 1000));
    expect(getByText(notesText)).toBeDefined();
  });
});
