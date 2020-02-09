import React, { useState } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import styles from '../App.css';
import useCharacters from '../hooks/quotes';
import Button from '../components/commons/button/Button';
import Select from '../components/commons/option/Select.js';
export default function QuoteFetcher() {
  const [qty, setQty] = useState(1);
  const { characterQuotes, fetchCharacter, setSelectedCharacter, selectedCharacter, loading } = useCharacters(selectedCharacter, qty);

  return (
    <div className={ styles.QuoteFetcher }>
      <label>Character <Select onChange={ ({ target }) => setSelectedCharacter(target.value) } /> </label>
      <label> # of Quotes <input type="range" min="1" max="10" step="1" onChange={ ({ target }) => setQty(target.value) } /></label>
      <Button text="More!" handleClick={ fetchCharacter } />
      <QuoteList characterQuotes={ characterQuotes } loading={ loading } />
    </div>
  );
}
