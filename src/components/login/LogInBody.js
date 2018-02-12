import React from 'react'
import TickerListItem from "../ticker/TickerListItem"

const logInBody = (props) => {

  console.log("rendered")
  const top10 = props.tickers.slice(0,10)

  let tickerList = top10.map( (t)=> {
    return(<TickerListItem ticker={t} key={t.id}/>)
  })

  return (
    <div>
      {tickerList}
    </div>
  )


}

export default logInBody
