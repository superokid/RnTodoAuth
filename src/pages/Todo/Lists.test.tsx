import React from 'react';
import {screen, render} from '@testing-library/react-native';
import Lists from './Lists';

describe('<Lists />', () => {
  it('should render empty list', () => {
    render(<Lists items={[]} />);
    expect(screen.queryByTestId('todo-item__text')).toBeFalsy();
  });

  it('should render todo items', () => {
    render(
      <Lists
        items={[
          {
            id: '1',
            text: 'Item1',
          },
          {
            id: '2',
            text: 'Item2',
          },
          {
            id: '3',
            text: 'Item3',
          },
        ]}
      />,
    );
    expect(screen.getAllByTestId('todo-item__text').length).toBe(3);
  });
});
