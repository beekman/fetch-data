import React, { useState, useEffect } from 'react';
import Quote from '../components/quotes/Quote';
import Button from '../components/commons/button/Button';
import useCharacters from '../hooks/quotes';

export default function QuoteFetcher() {

  const { character, fetchCharacter } = useCharacters('fry', 10);
  console.log(character);

  return (
    <>
      <Quote text={ character.text } image={ character.image } character={ character.character } />
      <Button text="Get a new one" handleClick={ fetchCharacter } />
    </>
  );
}
