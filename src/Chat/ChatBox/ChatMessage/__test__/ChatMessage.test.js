import React from 'react';
import { render } from '@testing-library/react';
import ChatMessage from '../ChatMessage';

describe('Chat message', () => {
  test('should render robot message', () => {
    const { container, queryByText } = render(<ChatMessage role="ROBOT" text="Hello" />);

    expect(queryByText('Hello')).toBeInTheDocument();
    expect(container.getElementsByClassName('robot-avatar').length).toBe(1);
  });

  test('should render consumer message', () => {
    const { container, queryByText } = render(<ChatMessage role="CUSTOMER" text="Hi" />);

    expect(queryByText('Hi')).toBeInTheDocument();
    expect(container.getElementsByClassName('customer-avatar').length).toBe(1);
  });
});
