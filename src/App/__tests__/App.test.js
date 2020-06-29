import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('should render App', () => {
  const { queryByText } = render(<App />);

  expect(queryByText('Welcome')).toBeInTheDocument();
});
