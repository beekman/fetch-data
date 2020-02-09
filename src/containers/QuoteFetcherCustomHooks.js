import React, { useState } from 'react';
import Button from '../components/commons/button/Button';
import Select from '../components/commons/option/Select';
import QuoteList from '../components/quotes/QuoteList';
import styles from '../App.css';
import useCharacters from '../hooks/quotes';

export default function QuoteFetcher() {
  const [qty, setQty] = useState(1);
  const { characterQuotes, fetchCharacter, setSelectedCharacter, selectedCharacter, loading } = useCharacters(selectedCharacter, qty);

  return (
    <div className={ styles.QuoteFetcher }>
      <Select onChange={ ({ target }) => setSelectedCharacter(target.value) } />
      <input type="range" min="1" max="10" step="1" onChange={ ({ target }) => setQty(target.value) } />
      <Button text="Gimme quotes!" handleClick={ fetchCharacter } />
      <QuoteList characterQuotes={ characterQuotes } loading={ loading } />
    </div>
  );
}
