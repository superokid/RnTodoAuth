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

  it('should delete item on button remove', () => {
    render(<Todo />);

    const elInput = screen.getByTestId('input-submit__input');
    const elSubmit = screen.getByTestId('input-submit__button');

    fireEvent.changeText(elInput, 'hello1');
    fireEvent.press(elSubmit);

    fireEvent.changeText(elInput, 'hello2');
    fireEvent.press(elSubmit);

    const elDelete = screen.getAllByText('REMOVE');
    fireEvent.press(elDelete[0]);

    expect(screen.queryByText('hello1')).toBeFalsy();
    expect(screen.getByText('hello2')).toBeTruthy();
  });

  it('should have edit mode if item selected', () => {
    render(<Todo />);

    const elInput = screen.getByTestId('input-submit__input');
    const elSubmit = screen.getByTestId('input-submit__button');

    fireEvent.changeText(elInput, 'hello1');
    fireEvent.press(elSubmit);

    fireEvent.changeText(elInput, 'hello2');
    fireEvent.press(elSubmit);

    fireEvent.press(screen.getByText('hello2'));

    expect(elInput.props.value).toBe('hello2');
  });

  it('should able edit item', () => {
    render(<Todo />);

    const elInput = screen.getByTestId('input-submit__input');
    const elSubmit = screen.getByTestId('input-submit__button');

    fireEvent.changeText(elInput, 'hello1');
    fireEvent.press(elSubmit);

    fireEvent.press(screen.getByText('hello1'));
    fireEvent.changeText(elInput, 'hello1 updated xxx');
    fireEvent.press(elSubmit);

    expect(screen.queryByText('hello1')).toBeFalsy();
    expect(screen.getByText('hello1 updated xxx')).toBeTruthy();
  });
});
