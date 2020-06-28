import React from 'react';
import { render } from '@testing-library/react';
import ChatHeader from '../ChatHeader';

describe('Chat header', () => {
  test('should render header', () => {
    const mockShop = {
      id: 1,
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/zh/b/bf/Starbucks_Coffee.svg',
    };

    const { queryByText } = render(<ChatHeader shop={mockShop} />);

    expect(queryByText('Apple')).toBeInTheDocument();
  });
});
