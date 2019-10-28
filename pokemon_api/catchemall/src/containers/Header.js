import React from 'react';
import logo from 'images/logo.png';

const Header = () => (
  <header className="Header l-row">
    <div className="l-left">
      <div className="l-col">
        <img className="Header__logo" src={logo}  alt="Pokemon Api" />
      </div>
    </div>
    <div className="l-right">
      <div className="l-col">
        <button>Random 10</button>
        <button>Random 1</button>
      </div>
    </div>
  </header>
);

export default Header;

