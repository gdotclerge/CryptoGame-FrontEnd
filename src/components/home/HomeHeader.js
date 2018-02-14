import React from 'react'

const homeHeader = (props) => {


  return (
    <div>
      <p>Remaining USD: ${props.user.unspent_money}</p>
      Portfolio amount/value
    </div>
  )



}

export default homeHeader




// const usersTickerIds = props.user.portfolios.map( (p)=> p.ticker_id)


// for each userticker I need to find it in all tickers and add it to an array to spit LogOut






// props.user.portfolios[0].purchase_amount * ticker amount
