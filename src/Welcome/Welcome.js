import React from 'react';
import { ChatSection } from '../styles';
import { Header } from './styles';
import WelcomeFooter from './WelcomeFooter/WelcomeFooter';
import ChatBox from '../Chat/ChatBox/ChatBox';

const Welcome = () => {
  return (
    <ChatSection>
      <Header>Welcome</Header>
      <ChatBox messages={[]} />
      <WelcomeFooter />
    </ChatSection>
  );
};

export default Welcome;
