import React from 'react';
import logo from 'images/logo.png';

const Header = (props) => (
  <header className="Header l-row">
    <div className="l-left">
      <div className="l-col">
        <img className="Header__logo" src={logo}  alt="Pokemon Api" />
      </div>
    </div>
    <div className="l-right">
      <div className="l-col">
      {
        props.loading ?
          <span>Loading pokemons...</span>
        :
          <span>
            <button value={props.modes.MANY} onClick={props.setCatchNum}>Catch {props.modes.MANY}</button>
            <button value={props.modes.ONE} onClick={props.setCatchNum}>Catch {props.modes.ONE}</button>
          </span>
      }
      </div>
    </div>
  </header>
);

export default Header;
