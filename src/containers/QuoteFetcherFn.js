import React, { useState, useEffect } from 'react';
import { getFuturamaQuote } from '../components/services/quotesApi';
import Quote from '../components/quotes/Quote';
import Button from '../components/commons/button/Button';

export default function QuoteFetcher() {
  const [text, setText] = useState('');
  const [character, setCharacter] = useState('');
  const [image, setImage] = useState('');

  const fetch = () => {
    getFuturamaQuote()
      .then(quoteResponse => {
        setText(quoteResponse.text);
        setCharacter(quoteResponse.character);
        setImage(quoteResponse.image);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Quote text={ text } image={ image } character={ character } />
      <Button text="Get a new one" handleClick={ fetch } />
    </>
  );
}
