import React, { Component } from 'react';
import { getFuturamaQuote } from '../components/services/quotesApi';
import Quote from '../components/quotes/Quote';
import Button from '../components/commons/button/Button';

export default class QuoteFetcher extends Component {
  state = {
    quote: { text: '', character: '', image: '' }
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    getFuturamaQuote()
      .then(quote => this.setState({ quote }));
  };
  render() {
    const { quote } = this.state;

    return (
      <>
        <Quote { ...quote } />
        <Button text="Get a new one" onClick={ this.fetch } />
      </>
    );
  }
}
