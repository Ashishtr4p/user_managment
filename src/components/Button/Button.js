import React from 'react';
//import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => {
  return (
    <button
      onClick={props.onClick} type={props.type} className={`button button--${props.size || 'default'} ${props.inverse &&
        'button--inverse'} ${props.danger && 'button--danger'}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
