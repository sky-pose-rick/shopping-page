import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Cart from './Cart';

it('cart renders', () => {
  render(<Cart value={7} />);
  expect(screen.getByText(/7/i)).toBeInTheDocument();
});

it('has a button', () => {
  render(<Cart />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

it('has an image', () => {
  render(<Cart />);
  expect(screen.getByRole('img')).toBeInTheDocument();
});
