import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text }) => (
  <q>{ text }</q>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Quote;
