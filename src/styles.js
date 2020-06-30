import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ChatSection = styled.div`
  border: 10px solid black;
  border-radius: 40px;
  width: 350px;
  height: 600px;
  background-color: #f1f2f6;
  display: flex;
  flex-flow: column nowrap;
`;

export const Header = styled.div`
  padding: 30px 0 20px;
  background-color: #2f3542;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  color: white;
  text-align: center;
  min-height: 18px;
  font-size: 18px;
  font-weight: 300;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
