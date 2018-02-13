import React from 'react'
import Adapter from '../../adapter'

class tickerPurchase extends React.Component {

  state = {
    purchaseQty: null
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
        purchase_price: this.props.tickerInfo.price_usd
      }
      console.log(newPortfolio)
      Adapter.postNewPortfolio(newPortfolio)
      .then(
        user => this.props.refreshUser(user)
      )
    }
  }

  render() {
    const purchaseCost = -(this.state.purchaseQty * this.props.tickerInfo.price_usd).toFixed(2)
    return (<div>
      Ammount: <input type='number' onChange={this.setPurchaseQty}/><br/>
      x {this.props.tickerInfo.price_usd} USD<br/>
      _<br/>
      {purchaseCost} USD<br/>
      {this.props.user.unspent_money.toFixed(2)} USD<br/>
      _ <br/>
      {(this.props.user.unspent_money + purchaseCost).toFixed(2)} USD<br/>
      <button onClick={this.purchaseCrypto}>Buy</button><br/>
    </div>)
  }



}

export default tickerPurchase
