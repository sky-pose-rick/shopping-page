import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Cart from './Cart';

it('cart renders', () => {
  render(<Cart value={7} />);
  expect(screen.getByText(/7/i)).toBeInTheDocument();
});
