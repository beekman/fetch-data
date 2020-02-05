import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, character, image }) => (
  <figure>
    <img src={ image } />
    <blockquote>{ character ? ` ${character}` : '' }: <q>{ text }</q></blockquote>
  </figure>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
};

export default Quote;
