import { useState, useEffect } from 'react';
import { getFuturamaQuote } from '../services/quotesApi';

const useCharacters = (characterName = 'bender', quantity = 1) => {
  const [character, setCharacter] = useState({});
  const [selectedCharacter, setSelectedCharacter] = useState({});

  useEffect(() => {
    fetchCharacter();
  }, [characterName, quantity]);

  const fetchCharacter = () => {
    getFuturamaQuote(characterName, quantity)
      .then(fetchedCharacter => setCharacter(fetchedCharacter));
  };
  return { character, fetchCharacter, selectedCharacter, setSelectedCharacter };
};

export default useCharacters;
