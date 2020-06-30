import React from 'react';
import { Link } from 'react-router-dom';
import { ChatSection, Header, Body } from '../styles';

const NotFound = () => {
  return (
    <ChatSection>
      <Header>Not Found</Header>
      <Body>
        <h1>Coming Soon...</h1>
        <Link to="/">Back to home</Link>
      </Body>
    </ChatSection>
  );
};

export default NotFound;
