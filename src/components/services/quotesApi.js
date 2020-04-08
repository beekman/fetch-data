export const getFuturamaQuote = () => {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.json())
    .then(([{ quote, character, image }]) => ({
      text: quote,
      character,
      image
    }));
};
