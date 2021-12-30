import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { act } from 'react-dom/test-utils';

import Shop from './Shop';
import apiHelper from './apiHelper';
// import apiHelper from './apiHelper';

jest.mock('./apiHelper');

describe('use mock API', () => {
  const itemData = [
    {
      title: 'item1',
      src: 'item1.png',
      alt: 'first item',
      id: 'item-1',
    },
    {
      title: 'item2',
      src: 'item2.png',
      alt: 'second item',
      id: 'item-2',
    },
    {
      title: 'item3',
      src: 'item3.png',
      alt: 'third item',
      id: 'item-3',
    },
  ];

  beforeEach(async () => {
    apiHelper.getAPIData.mockResolvedValue(itemData);
    await act(async () => {
      render(<Shop />);
    });
  });

  it('has a cart', () => {
    expect(screen.getByText(/(0)/i)).toBeInTheDocument();
  });

  it('has a list', () => {
    expect(screen.getAllByRole('listitem').length).toBe(3);
  });

  it('can add items to the cart', () => {
    const textboxes = screen.getAllByRole('textbox');
    const submits = screen.getAllByText(/add to cart/i);
    fireEvent.change(textboxes[1], { target: { value: 8 } });
    fireEvent.click(submits[1]);
    expect(screen.getByText(/(8)/i)).toBeInTheDocument();
  });
});
