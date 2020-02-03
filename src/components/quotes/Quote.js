import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, character, image }) => (
  <figure>
    <img src={ image } />
    <figcaption>{ character ? ` ${character}` : '' }: &quot;{ text }&quot;</figcaption>
  </figure>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  character: PropTypes.string
};

export default Quote;
