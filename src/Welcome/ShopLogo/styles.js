import styled from 'styled-components';

export const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  background-image: ${(props) => props.url};
`;
