import React from 'react'

const tickerInfo = (props) => {



  return (
    <div>
    {props.ticker.name}<br/>
    {props.ticker.symbol}<br/>
    {props.ticker.price_usd}<br/>
    </div>
  )



}

export default tickerInfo
