import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, handleClick }) => (
  <button onClick={ handleClick }>{ text }</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default Button;
