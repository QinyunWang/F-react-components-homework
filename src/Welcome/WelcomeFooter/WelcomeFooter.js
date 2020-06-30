import React from 'react';
import { Footer, Section } from './styles';

const WelcomeFooter = () => {
  return (
    <Footer>
      <Section className="section" to="/chat">
        客服
      </Section>
      <Section className="section" to="/notfound">
        6.18活动
      </Section>
      <Section className="section" to="/notfound">
        关于我们
      </Section>
    </Footer>
  );
};

export default WelcomeFooter;
