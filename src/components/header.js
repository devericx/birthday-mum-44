import React from 'react';

export const Header = props =>
  <h1 style={props.style}>
    <span role="img" aria-label="birthday cake">🎂</span>
    {' Happy birthday '}
    <span role="img" aria-label="smile">😄</span>
  </h1>;
