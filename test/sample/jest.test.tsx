import React from 'react';
import { render, screen } from '@testing-library/react';

import { Hello } from './Hello';

it('prints a name', () => {
  render(<Hello />);
  expect(screen.getByText(/hello, world/i)).toBeInTheDocument();
});
