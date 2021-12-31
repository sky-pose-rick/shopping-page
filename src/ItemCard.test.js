import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemCard from './ItemCard';

describe('', () => {
  const mockSubmit = jest.fn((a) => a);

  beforeEach(() => {
    render(<ItemCard
      title="item1"
      src="item1.png"
      alt="first item"
      onSubmit={mockSubmit}
    />);
  });
  it('item card renders', () => {
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('reads values from props', () => {
    const image = screen.getByRole('img');
    expect(image.src).toMatch(/item1.png/);
    expect(image.alt).toEqual('first item');
    expect(screen.getByText(/item1/i)).toBeInTheDocument();
  });

  it('has a text input and 3 buttons', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(3);
  });

  it('onSubmit is called by final button', () => {
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[2]);
    expect(mockSubmit).toBeCalled();
  });

  it('textbox and +/- buttons work', () => {
    const buttons = screen.getAllByRole('button');
    const text = screen.getByRole('textbox');
    fireEvent.change(text, { target: { value: 5 } });
    // +2, -1
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[0]);
    // submit
    fireEvent.click(buttons[2]);
    expect(mockSubmit).toBeCalledWith(6);
  });

  it('- button disabled at 0', () => {
    const buttons = screen.getAllByRole('button');
    const text = screen.getByRole('textbox');
    fireEvent.change(text, { target: { value: 0 } });
    expect(buttons[0].disabled).toBe(true);
    expect(buttons[2].disabled).toBe(true);
  });

  it.todo('test input validation');

  it('reset qty on submit', () => {
    const text = screen.getByRole('textbox');
    fireEvent.change(text, { target: { value: 5 } });
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[2]);

    // expect value to be set to 0
    expect(text.value).toEqual('0');
  });
});
