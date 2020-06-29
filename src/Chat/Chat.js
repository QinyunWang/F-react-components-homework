import React, { Component } from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';
import { ROLE } from '../constants';
import { ChatSection } from '../styles';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
    this.setState.bind(this);
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 500);
  }

  componentDidUpdate() {
    const newMessage = this.state.messages[this.state.messages.length - 1];
    if (newMessage.role === ROLE.CUSTOMER) {
      const { text } = newMessage;
      const responseMessage = answersData.filter((answer) => this.checker(text, answer.tags));

      if (responseMessage.length !== 0) {
        const resultMessages = this.state.messages.concat(responseMessage);
        setTimeout(() => {
          this.setState({
            messages: resultMessages,
          });
        }, 500);
      }
    }
  }

  checker = (text, tags) => tags.some((element) => text.includes(element));

  setChatState = (state) => {
    this.setState(state);
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <ChatSection>
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput messages={messages} setChatState={this.setChatState} />
      </ChatSection>
    );
  }
}

export default Chat;
