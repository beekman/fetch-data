import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, character }) => (
  <figure>
    <div className="quote">{ character ? ` ${character}` : '' }: <q>{ text }</q> </div>
  </figure >
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
};

export default Quote;
