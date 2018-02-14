import React from 'react'

const TickerInfo = (props) => {

  return (
    <div>
    <h1>{props.tickerInfo.name}</h1>

    <h3>({props.tickerInfo.symbol})</h3>

    <h4>Price: ${props.tickerInfo.price_usd} USD/Coin</h4>

    <p>
      1hr: { props.tickerInfo.percent_change_1h > 0 ? "+" + props.tickerInfo.percent_change_1h : props.tickerInfo.percent_change_1h }%<br />
      24hr: { props.tickerInfo.percent_change_24h > 0 ? "+" + props.tickerInfo.percent_change_24h : props.tickerInfo.percent_change_24h }%<br />
      7d: { props.tickerInfo.percent_change_7d > 0 ? "+" + props.tickerInfo.percent_change_7d : props.tickerInfo.percent_change_7d }%<br />
    </p>

    ----------------------<br />
    </div>
  )


}

export default TickerInfo
