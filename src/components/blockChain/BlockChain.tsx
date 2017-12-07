import * as React from 'react';

class BlockChain extends React.Component {
  state = {
    data: {},
  }
  componentDidMount() {
    this.fetchExchangeRates()
  }
  fetchExchangeRates = () => {
    fetch(' https://blockchain.info/ticker')
      .then(data => data.json())
      .then(data => (console.log('data', data), this.setState({data})))
      .catch(err => (console.log('err', err), err))
  }
  render() {
    return (
      <div>
        <h1>BlockChain</h1>
        <button
          onClick={this.fetchExchangeRates}
        >Get Data</button>
      </div>
    );
  }

}

export default BlockChain;
