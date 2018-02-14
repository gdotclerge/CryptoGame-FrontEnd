import React from 'react'
import TickerInfo from '../ticker/TickerInfo'

class HomePortfolio extends React.Component {

  userTickers () {
    const usersTickerIds = this.props.user.portfolios.map( (p)=> p.ticker_id)
    const usersTickers = []
      usersTickerIds.forEach( (tId) => {
        const ticker = this.props.tickers.find( (t) => {return t.id === tId})
        usersTickers.push(ticker)
    })
    return usersTickers
  }

  listTickers = () => {
    return this.userTickers().map( (t)=> {return( <TickerInfo ticker={t}/>) })
  }


  render = () => {
    return (
      <div>
        Tickers based on portfolio
      </div>
    )
  }



}

export default HomePortfolio
