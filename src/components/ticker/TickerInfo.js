import React from 'react'

const tickerInfo = (props) => {



  return (
    <div>
    {props.tickerInfo.name}<br/>
    {props.tickerInfo.symbol}<br/>
    {props.tickerInfo.price_usd}<br/>
    </div>
  )



}

export default tickerInfo
