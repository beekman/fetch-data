import React, { useState, useEffect } from 'react';
import Quote from '../components/quotes/Quote';
import Button from '../components/commons/button/Button';
import Select from '../components/commons/Option/Select';
import useCharacters from '../hooks/quotes';

export default function QuoteFetcher() {

  const { character, fetchCharacter, selectedCharacter, setSelectedCharacter } = useCharacters('leela', 10);

  return (
    <>
      <Select onChange={ ({ target }) => setSelectedCharacter(target.value) } />
      <Button text="Get a new one" handleClick={ fetchCharacter } />

      <Quote text={ character.text } image={ character.image } character={ character.character } />
    </>
  );
}
