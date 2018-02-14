import React from 'react'

const TickerPortflioInfo = (props) => {

  console.log(props.portfolios);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const totalCoins = props.portfolios.map( p => p.purchase_amount ).reduce(reducer)
  const totalValue = props.portfolios.map( p => p.purchase_amount * props.tickerInfo.price_usd )
    .reduce(reducer).toFixed(2)


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

      You own <b>{totalCoins} {props.tickerInfo.name}</b>, currently worth:

      <h3>${totalValue} USD</h3>

      <button onClick={props.setButtonText}>{props.buttonText} {props.tickerInfo.name}</button><br />

      <br />----------------------<br />
    </div>
  )


}

export default TickerPortflioInfo
