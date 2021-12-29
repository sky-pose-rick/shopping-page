import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShopItems from './ShopItems';

describe('', () => {
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

  const mockAddItem = jest.fn(() => {});

  beforeEach(() => {
    render(<ShopItems items={itemData} onAddToCart={mockAddItem} />);
  });

  it('render ShopItems component', () => {
    expect(screen.getByText(/my shop/i)).toBeInTheDocument();
  });

  it('has a list that displays items', () => {
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(3);
  });
});
