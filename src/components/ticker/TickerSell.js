import React from 'react'
import Adapter from '../../adapter'

class TickerSell extends React.Component {

  reducer = (accumulator, currentValue) => accumulator + currentValue
  totalCoins = this.props.portfolios.map( p => p.purchase_amount ).reduce(this.reducer)

  state = {
    sellQty: this.totalCoins,
  }

  setSellQty = (e) => {
    if (e.target.value <= this.totalCoins)
    {this.setState({
      sellQty: e.target.value
    })}
  }

  sellCrypto = (e) => {
    console.log(this.props.portfolios[0].id);
    const purchaseCost = -(this.state.purchaseQty * this.props.tickerInfo.price_usd).toFixed(2)
      const portfolio = {
        id: this.props.portfolios[0].id,
        user_id: this.props.user.id,
        ticker_id: this.props.tickerBackEnd.id,
        purchase_amount: this.state.sellQty,
        purchase_price: (this.props.tickerInfo.price_usd * this.state.sellQty)
      }
      console.log(portfolio)
      Adapter.updatePortfolio(portfolio)
      .then(
        user => this.props.refreshUser(user)
      ).then(
        this.setState({
          sellQty: this.totalCoins
        })
      )
    }

  render() {
    const netToUser = (this.state.sellQty * this.props.tickerInfo.price_usd).toFixed(2)
    return (<div>
      <p>How much of your</p>
      <h4>{this.totalCoins} {this.props.tickerInfo.name}</h4>
      <p>would you like to sell?</p>
      <input type='number' value={this.state.sellQty} onChange={this.setSellQty}/>
      <p>
        {this.state.sellQty} {this.props.tickerInfo.name} will net you: <b>${netToUser} USD</b><br />
        Increasing your cash to: <b>${(parseFloat(this.props.user.unspent_money) + parseFloat(netToUser)).toFixed(2)} USD</b>
      </p>
      <button onClick={this.sellCrypto}>Sell</button>
    </div>)
  }



}

export default TickerSell
