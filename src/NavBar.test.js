import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar';

it('navbar renders', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  expect(screen.getByText(/shoppage/i)).toBeInTheDocument();
});

it('has two links', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  expect(screen.getAllByRole('link').length).toBe(2);
});
