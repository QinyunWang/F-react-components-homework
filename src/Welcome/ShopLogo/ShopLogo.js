import React from 'react';
import { Logo } from './styles';

const ShopLogo = ({ shop }) => {
  return (
    <>
      <Logo url={`url(${shop.logo})`} />
      <h1>{shop.name}</h1>
    </>
  );
};

export default ShopLogo;
