import React from 'react';
import headerLogo from '../assets/SuperBank.png';

const Header: React.FC = () => (
  <div className="header">
    <div className="logo">
      <img src={headerLogo} alt="headerLogo" />
    </div>
  </div>
);

export default Header;
