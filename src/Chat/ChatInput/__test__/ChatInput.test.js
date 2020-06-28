import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import ChatInput from '../ChatInput';

describe('Chat input', () => {
  test('should render input box and button', async () => {
    const mockSetState = jest.fn();

    const { queryByText, getByTestId } = render(
      <ChatInput messages={[]} setChatState={mockSetState} />
    );

    await act(async () => {
      fireEvent.click(queryByText('Send'));
    });

    expect(getByTestId('chat-input')).toBeInTheDocument();
    expect(queryByText('Send')).toBeInTheDocument();
    expect(mockSetState).not.toBeCalled();
  });

  test('should display text when input', async () => {
    const mockSetState = jest.fn();
    const { queryByText, queryByDisplayValue, getByTestId } = render(
      <ChatInput messages={[]} setChatState={mockSetState} />
    );

    const messageInput = getByTestId('chat-input', { selector: 'input' });
    await act(async () => {
      fireEvent.change(messageInput, { target: { value: 'Hello' } });
    });

    expect(queryByDisplayValue('Hello')).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(queryByText('Send'));
    });

    expect(mockSetState).toBeCalledTimes(1);
    expect(queryByDisplayValue('Hello')).not.toBeInTheDocument();
  });
});
