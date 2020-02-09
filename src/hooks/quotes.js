import { useState, useEffect } from 'react';
import { getFuturamaQuote } from '../services/quotesApi';

const useCharacters = (characterName = 'bender', quantity = 1) => {
  const [characterQuotes, setCharacterQuotes] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(characterName);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchCharacter();
  }, [quantity, selectedCharacter]);

  const fetchCharacter = () => {
    getFuturamaQuote(selectedCharacter, quantity)
      .then(quotes => {
        setCharacterQuotes(quotes);
        setLoading(false);
      });
  };
  return { characterQuotes, fetchCharacter, selectedCharacter, setSelectedCharacter, loading };
};

export default useCharacters;
