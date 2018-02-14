import React from 'react'
import TickerSymbol from '../ticker/TickerSymbol'

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
    return this.userTickers().map( (t)=> {return( <TickerSymbol ticker={t}/>) })
  }


  listSearchTickers = () => {
    console.log(this.props.filteredSearchTerms)
    return this.props.filteredSearchTerms.map( (ts)=> {
      return(<TickerSymbol tickerSearchTerm={ts} key={ts}/>)
    })
  }


  render = () => {
    return (
      <div>
        Tickers based on portfolio
        {this.listSearchTickers()}
      </div>
    )
  }



}

export default HomePortfolio
