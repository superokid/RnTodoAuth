import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react-native';
import Todo from './Todo';

describe('<Todo />', () => {
  it('should add new item on add', () => {
    render(<Todo />);
    const elInput = screen.getByTestId('input-submit__input');
    const elSubmit = screen.getByTestId('input-submit__button');
    fireEvent.changeText(elInput, 'hello');
    fireEvent.press(elSubmit);
    expect(elInput.props.value).toBe('');
    expect(screen.getByText('hello')).toBeTruthy();
  });

  it('should not add to list if submit empty string', () => {
    render(<Todo />);
    const elSubmit = screen.getByTestId('input-submit__button');
    fireEvent.press(elSubmit);

    const elItemText = screen.queryByTestId('todo-item__text');
    expect(elItemText).toBeFalsy();
  });
});
