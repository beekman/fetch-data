export const getFuturamaQuote = () => {
  return fetch('futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.json())
    .then(([quote, character, image]) => ({
      quote,
      character,
      image
    }));
};
