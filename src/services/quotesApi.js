export const getFuturamaQuote = (character, quantity) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/characters/${character}/${quantity}`)
    .then(res => res.json());

};
