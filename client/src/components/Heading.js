import 'babel-polyfill';
import React from 'react';

const Heading = (props) => (
  <div className="heading" style={{ 'color': `${props.coloring}` }}>
    <div className="heading__block"></div>
    <h1 className="heading__text">{props.heading}</h1>
  </div>
);

export default Heading;