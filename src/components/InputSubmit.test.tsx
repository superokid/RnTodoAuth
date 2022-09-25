import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react-native';
import InputSubmit from './InputSubmit';

describe('<InputSubmit />', () => {
  it('should able submit correct text', () => {
    const onSubmit = jest.fn();
    render(<InputSubmit buttonText="submit" onSubmit={onSubmit} />);

    const elInput = screen.getByTestId('input-submit__input');
    const elButton = screen.getByTestId('input-submit__button');

    const TYPED_INPUT = 'here input value';
    fireEvent.changeText(elInput, TYPED_INPUT);
    fireEvent.press(elButton);

    expect(onSubmit).toBeCalledWith(TYPED_INPUT);
  });
});
