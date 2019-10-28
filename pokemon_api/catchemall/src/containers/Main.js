import React from 'react';

import Sidebar from 'containers/Sidebar';
import Details from 'containers/Details';

const Main = (props) => (
  <div className="Main l-row">
    <div className="l-left">
      <Sidebar {...props}/>
    </div>
    <div className="l-right">
      <Details/>
    </div>
  </div>
);

export default Main;

