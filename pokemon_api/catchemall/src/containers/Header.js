import React from 'react';
import logo from 'images/logo.png';

const Header = (props) => (
  <header className="Header l-row">
    <div className="l-left">
      <div className="l-col">
        <img className="Header__logo" src={logo}  alt="Pokemon Api" />
      </div>
    </div>
  </header>
);

export default Header;
