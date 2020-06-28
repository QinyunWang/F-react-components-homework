import React from 'react';
import { render } from '@testing-library/react';
import ChatBox from '../ChatBox';

describe('Chat box', () => {
  test('should render messages', () => {
    const mockMessages = [
      {
        text: 'Hi. How are you?',
        role: 'ROBOT',
      },
      {
        text: 'I am fine.',
        role: 'CUSTOMER',
      },
      {
        text: 'That is great.',
        role: 'ROBOT',
      },
    ];

    const { container, queryByText } = render(<ChatBox messages={mockMessages} />);

    expect(queryByText('Hi. How are you?')).toBeInTheDocument();
    expect(queryByText('I am fine.')).toBeInTheDocument();
    expect(queryByText('That is great.')).toBeInTheDocument();
    expect(container.getElementsByClassName('robot-avatar').length).toBe(2);
    expect(container.getElementsByClassName('customer-avatar').length).toBe(1);
  });
});
