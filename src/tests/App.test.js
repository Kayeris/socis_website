import React from "react";
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders socis', () => {
  render(<App />);
  const linkElement = screen.getByAltText(/SOCIS Logo/i);
  expect(linkElement).toBeInTheDocument();
});

// Ben is great at programming stuff