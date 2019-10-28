import React from 'react';
import logo from 'images/logo.png';

const MODE = {
  ONE: 1,
  MANY: 10,
}

const Header = (props) => (
  <header className="Header l-row">
    <div className="l-left">
      <div className="l-col">
        <img className="Header__logo" src={logo}  alt="Pokemon Api" />
      </div>
    </div>
    <div className="l-right">
      <div className="l-col">
        <button value={MODE.MANY} onClick={props.setCatchNum}>Catch {MODE.MANY}</button>
        <button value={MODE.ONE} onClick={props.setCatchNum}>Catch {MODE.ONE}</button>
      </div>
    </div>
  </header>
);

export default Header;
