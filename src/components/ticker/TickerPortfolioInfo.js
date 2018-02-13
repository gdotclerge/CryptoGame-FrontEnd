import React from 'react'

const tickerPortflioInfo = (props) => {

  return (
    <div>
    Portfolio
    <h3>{props.tickerInfo.name}</h3>
    <h4>({props.tickerInfo.symbol})</h4>
    <p>Value: {props.tickerInfo.price_usd} USD/Coin</p>
    ----------------------<br /><br />
    </div>
  )


}

export default tickerPortflioInfo
