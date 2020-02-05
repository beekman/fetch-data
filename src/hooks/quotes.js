import { useState, useEffect } from 'react';
import { getFuturamaQuote } from '../services/quotesApi';

const useCharacters = (characterName = 'bender', quantity = 1) => {
  const [character, setCharacter] = useState({});
  const [selectedCharacter, setSelectedCharacter] = useState(characterName);

  useEffect(() => {
    fetchCharacter();
  }, [quantity, selectedCharacter]);

  const fetchCharacter = () => {
    getFuturamaQuote(selectedCharacter, quantity)
      .then(fetchedCharacter => setCharacter(fetchedCharacter));
  };
  return { character, fetchCharacter, selectedCharacter, setSelectedCharacter };
};

export default useCharacters;
