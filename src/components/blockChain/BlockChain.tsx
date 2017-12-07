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
  timer = () => {
    setInterval(() => {
      console.log('timer ran')
      this.fetchExchangeRates()
    },15000);
  }
  render() {
    const { USD } = this.state.data
    return (
      <div>
        <h1>BlockChain</h1>
        <button
          onClick={this.timer}
        >Update Rates Every Second</button>

        <div>BITCOIN PRICE: ${USD && USD.buy}</div>

      </div>
    );
  }

}

export default BlockChain;
