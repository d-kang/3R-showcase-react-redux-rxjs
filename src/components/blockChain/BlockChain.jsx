import React from 'react';

class BlockChain extends React.Component {
  state = {
    data: {},
    holding: 0,
    purchasedPrice: 0,
    gains: 0,
  }
  componentDidMount() {
    this.fetchExchangeRates()
  }
  fetchExchangeRates = () => {
    fetch(' https://blockchain.info/ticker')
      .then(data => data.json())
      .then(data => (this.setState({data}), data))
      .then(data => console.log('data', data))
      .catch(err => (console.log('err', err), err))
  }
  timer = () => {
    setInterval(() => {
      console.log('timer ran')
      this.fetchExchangeRates()
    },15000);
  }
  totalBalance = () => {
    return this.state.data.USD ? this.state.holding * this.state.data['USD'].buy : 0
  }
  handleHoldingSubmit = (e) => {
    e.preventDefault();
    const holding = Number(e.target[0].value)
    this.setState({holding});
  }
  handlePurchasedPriceSubmit = (e) => {
    e.preventDefault();
    const purchasedPrice = Number(e.target[0].value)
    console.log('purchasedPrice', purchasedPrice);
    console.log('typeof purchasedPrice', typeof purchasedPrice);
    console.log('this.state.holding', this.state.holding);
    console.log('typeof this.state.holding', typeof this.state.holding);
    this.setState({gains: this.totalBalance() - purchasedPrice});
  }
  render() {
    const { data } = this.state
    return (
      <div>
        <h1>BlockChain</h1>
        <button
          onClick={this.timer}
        >Update Rates Every Second</button>

        <div>BITCOIN PRICE: ${data && data.USD && data.USD.buy}</div>

        <form
          action=""
          onSubmit={this.handleHoldingSubmit}
        >
          <input
            type="text"
            placeholder="Holding"
          />
          <button>enter</button>
        </form>


        <form
          action=""
          onSubmit={this.handlePurchasedPriceSubmit}
        >
          <input
            type="text"
            placeholder="purchased at"
          />
          <button>enter</button>
        </form>

        <div>total balance: {this.totalBalance()}</div>
        <div>gains: {this.state.gains}</div>
      </div>
    );
  }

}

export default BlockChain;
