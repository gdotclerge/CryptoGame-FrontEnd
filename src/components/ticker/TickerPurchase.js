import React from 'react'
import Adapter from '../../adapter'

class TickerPurchase extends React.Component {

  state = {
    purchaseQty: 0
  }

  setPurchaseQty = (e) => {
    this.setState({
      purchaseQty: e.target.value
    })
  }

  purchaseCrypto = (e) => {
    const purchaseCost = -(this.state.purchaseQty * this.props.tickerInfo.price_usd).toFixed(2)
    if ((this.props.user.unspent_money + purchaseCost) > 0) {
      const newPortfolio = {
        user_id: this.props.user.id,
        ticker_id: this.props.tickerBackEnd.id,
        purchase_amount: this.state.purchaseQty,
        purchase_price: (this.props.tickerInfo.price_usd * this.state.purchaseQty)
      }
      console.log(newPortfolio)
      Adapter.postNewPortfolio(newPortfolio)
      .then(
        user => this.props.refreshUser(user)
      ).then(
        this.setState({
          purchaseQty: 0
        })
      )
    }
  }

  render() {
    const purchaseCost = -(this.state.purchaseQty * this.props.tickerInfo.price_usd).toFixed(2)
    return (<div>

      <p>How much {this.props.tickerInfo.name} would you like to Buy?</p>

      <p><input type='number' value={this.state.purchaseQty} onChange={this.setPurchaseQty}/></p>

      <p>@ ${this.props.tickerInfo.price_usd} USD<br/>
      will currently cost:</p>

      <h4>${-purchaseCost} USD</h4>

      <p>You have: <b>${this.props.user.unspent_money.toFixed(2)} USD</b><br/>
      This will leave you with: <b>${(this.props.user.unspent_money + purchaseCost).toFixed(2)} USD</b></p>

      <button onClick={this.purchaseCrypto}>Buy</button>
    </div>)
  }



}

export default TickerPurchase
