import React from 'react';
import { render, act, fireEvent, waitForElement } from '@testing-library/react';
import Chat from '../Chat';

describe('Chat', () => {
  test('should render chat', async () => {
    const { queryByText } = render(<Chat />);
    const robotMessage = await waitForElement(() =>
      queryByText('Hi，欢迎光临小店，有什么可以帮到您的吗？')
    );
    expect(robotMessage).toBeInTheDocument();
    expect(queryByText('starbucks星巴克')).toBeInTheDocument();
    expect(queryByText('Send')).toBeInTheDocument();
  });

  test('should render auto reply when customer message matched', async () => {
    const { queryByText, getByTestId } = render(<Chat />);

    await waitForElement(() => queryByText('Hi，欢迎光临小店，有什么可以帮到您的吗？'));
    const messageInput = getByTestId('chat-input', { selector: 'input' });
    await act(async () => {
      fireEvent.change(messageInput, { target: { value: '快递' } });
    });
    await act(async () => {
      fireEvent.click(queryByText('Send'));
    });

    const autoReply = await waitForElement(() => queryByText('快递为京东快递，一般次日到货'));
    expect(queryByText('快递')).toBeInTheDocument();
    expect(autoReply).toBeInTheDocument();
  });

  test('should not render robot reply when customer message not match', async () => {
    const { container, queryByText, getByTestId } = render(<Chat />);

    await waitForElement(() => queryByText('Hi，欢迎光临小店，有什么可以帮到您的吗？'));
    const messageInput = getByTestId('chat-input', { selector: 'input' });
    await act(async () => {
      fireEvent.change(messageInput, { target: { value: 'Hello' } });
    });
    await act(async () => {
      fireEvent.click(queryByText('Send'));
    });

    await waitForElement(() => queryByText('Hello'));
    expect(container.getElementsByClassName('robot-avatar').length).toBe(1);
  });
});
