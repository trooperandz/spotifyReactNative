import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { Button, BUTTON_TEST_ID, SPINNER_TEST_ID } from '../index';

const defaultProps = {
  children: 'text',
  onPress: jest.fn(),
};

const renderComponent = props =>
  render(<Button {...defaultProps} {...props} />);

describe('Button', () => {
  it('should render the activity indicator if in a loading state', () => {
    const { getByTestId } = renderComponent({ isLoading: true });

    expect(getByTestId(SPINNER_TEST_ID)).toBeDefined();
  });

  it('should render the text if not in a loading state', () => {
    const children = 'button text';
    const { getByText } = renderComponent({ isLoading: false, children });

    expect(getByText(children)).toBeDefined();
  });

  it('should execute the press handler if the button is pressed', () => {
    const { getByTestId } = renderComponent({ isLoading: true });

    fireEvent.press(getByTestId(BUTTON_TEST_ID));
    expect(defaultProps.onPress).toHaveBeenCalled();
  });
});
