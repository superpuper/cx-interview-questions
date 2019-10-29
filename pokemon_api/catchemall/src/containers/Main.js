import React, { useState } from 'react';

import Sidebar from 'containers/Sidebar';
import Details from 'containers/Details';

const Main = (props) => {
  const [url, setUrl] = useState('');

  return (
    <div className="Main l-row">
      <div className="l-left">
        { props.loading ? <div className="l-col">Loading pokemons...</div> : <Sidebar {...props} setUrl={setUrl}/> }
      </div>
      <div className="l-right">
        { props.loading ? null : <Details {...props} url={url} setUrl={setUrl}/> }
      </div>
    </div>
  )
}

export default Main;

