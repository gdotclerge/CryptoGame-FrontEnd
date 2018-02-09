import React from 'react'
import CryptoItem from './CryptoItem'

const topTenCryptoList = (props) => {

  console.log("rendered")

  let crypto = props.topTenCryptos.map( (c)=> {
    return(<CryptoItem crypto={c} key={c.id}/>)
  })

  return (
    <div>
      {crypto}
    </div>
  )


}

export default topTenCryptoList
