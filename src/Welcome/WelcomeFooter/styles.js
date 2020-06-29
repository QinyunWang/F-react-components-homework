import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.div`
  display: flex;
  background-color: #dfe4ea;
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  > .section:last-child {
    border-right: none;
  }
`;

export const Section = styled(Link)`
  min-height: 60px;
  font-size: 14px;
  text-decoration: none;
  color: black;
  width: 33.3%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid gray;
`;
