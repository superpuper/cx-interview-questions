import React from 'react';

const Details = (props) => (
  <div className="Details l-col">
    <button>Catch {props.modes.ONE}</button>
    <div>
      {props.url}
    </div>
  </div>
);

export default Details;

