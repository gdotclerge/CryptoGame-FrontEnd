import React from 'react'

const tickerInfo = (props) => {

  

  const showTickers = props.ticker ? {props.ticker.symbol} : "Waiting"

  return (
    <div>
      TickerInfo
      showTickers
    </div>
  )



}

export default tickerInfo



// {props.ticker.name}<br/>
// {props.ticker.symbol}<br/>
// {props.ticker.price_usd}<br/>
