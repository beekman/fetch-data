import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

const QuoteList = ({ characterQuotes, loading }) => {
  const QuoteItems = characterQuotes.map((quote, i) => {
    return <li key={ i }><Quote text={ quote.quote } image={ quote.image } character={ quote.character } /></li>;
  });

  return loading
    ? <h1>Loading</h1>
    : <>
      <div className="imageContainer"><img src={ characterQuotes[0].image } /></div>
      <ul>{ QuoteItems }</ul>
    </>;
};

QuoteList.propTypes = {
  characterQuotes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default QuoteList;
