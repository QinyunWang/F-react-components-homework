import React, { useState } from 'react';
import './ChatInput.scss';
import { ROLE } from '../../constants';

const ChatInput = ({ messages, setChatState }) => {
  const [inputText, setInputText] = useState('');

  const handleButtonClick = () => {
    if (inputText) {
      const newMessages = messages.concat({
        text: inputText,
        role: ROLE.CUSTOMER,
      });
      setChatState({
        messages: newMessages,
      });
    }
    setInputText('');
  };

  return (
    <footer className="ChatInput">
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button type="button" onClick={handleButtonClick}>
        Send
      </button>
    </footer>
  );
};

export default ChatInput;
