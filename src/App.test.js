import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

it('app renders', () => {
  render(<App />);
  expect(screen.getByText(/my app/i)).toBeInTheDocument();
});
