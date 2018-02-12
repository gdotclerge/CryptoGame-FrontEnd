import React from 'react'

const tickerPurchase = (props) => {



  return (
    <div>
      # <input type='text'/><br/>
      x {props.ticker.price_usd}<br/>
      _<br/>
      input value x {props.ticker.price_usd}<br/>
      user money<br/>
      _ <br/>
      this much left<br/>
      <button>Buy</button><br/>
    </div>
  )



}

export default tickerPurchase
