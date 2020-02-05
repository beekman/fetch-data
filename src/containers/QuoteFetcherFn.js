import React, { useState, useEffect } from 'react';
import Quote from '../components/quotes/Quote';
import Button from '../components/commons/button/Button';
import Select from '../components/commons/option/Select';
import Range from '../components/commons/range/Range.js';
import useCharacters from '../hooks/quotes';

export default function QuoteFetcher() {

  const { character, fetchCharacter, selectedCharacter, setSelectedCharacter } = useCharacters('bender', 10);

  return (
    <>
      <Select onChange={ ({ target }) => setSelectedCharacter(target.value) } />
      <Range min={ 1 } max={ 10 } step={ 1 } />
      <Button text="Gimme quotes!" handleClick={ fetchCharacter } />

      <Quote text={ character.text } image={ character.image } character={ character.character } />
    </>
  );
}
