import React from 'react';

import Sidebar from 'containers/Sidebar';
import Details from 'containers/Details';

const Main = (props) => (
  <div className="Main l-row">
    <div className="l-left">
      { props.loading ? <div className="l-col">Loading pokemons...</div> : <Sidebar {...props}/> }
    </div>
    <div className="l-right">
      { props.loading ? null : <Details {...props}/> }
    </div>
  </div>
);

export default Main;

