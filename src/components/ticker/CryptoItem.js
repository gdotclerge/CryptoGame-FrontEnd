import React from 'react'

const cryptoItem = (props) => {



  return (
    <div>
      {props.crypto.rank}<br></br>
      {props.crypto.symbol}<br></br>
      {props.crypto.name}<br></br>
      {props.crypto.price_usd}<br></br>
    </div>
  )



}

export default cryptoItem
