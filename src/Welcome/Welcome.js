import React from 'react';
import { ChatSection } from '../styles';
import { Header, Body } from './styles';
import WelcomeFooter from './WelcomeFooter/WelcomeFooter';
import ShopLogo from './ShopLogo/ShopLogo';
import shopData from '../data/shop.json';

const Welcome = () => {
  return (
    <ChatSection>
      <Header>Welcome</Header>
      <Body>
        <ShopLogo shop={shopData} />
      </Body>
      <WelcomeFooter />
    </ChatSection>
  );
};

export default Welcome;
