import React, { Component } from 'react';
import { getFuturamaQuote } from '../services/quotesApi';
import Quote from '../components/quotes/Quote';
import Button from '../components/commons/button/Button';

export default class QuoteFetcher extends Component {
  state = {
    quote: { text: '', name: '', img: '' }
  }

  componentDidMount() {
    this.fetch();
  }
  fetch = () => {
    return getFuturamaQuote()
      .then (quote => this.setState({ quote }));
  }

  render() {
    const { quote } = this.state;

    return (
      <>
        <Quote {...quote} />
        <Button text="Get a new one" onClick={this.fetch} />
      </>
    );
  }
}
