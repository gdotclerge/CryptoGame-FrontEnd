import React from 'react'
import Adapter from '../../adapter';
import TickerInfo from './TickerInfo';
import TickerPortfolioInfo from './TickerPortfolioInfo';
import TickerPurchase from './TickerPurchase';


class TickerContainer extends React.Component {
  state = {
    tickerInfo: {},
    inUserPortfolio: false,
    portfolios: [],
    bodyType: "purchase"
  }


  setTicker = () => {
    console.log("Set Ticker")
    Adapter.getTickerInfo(this.props.ticker.search_term)
    .then( (json)=> {this.setState({
      tickerInfo: json
    })})
  }


  componentDidMount = () => {
    this.setTicker();
    setInterval(this.setTicker, 7000)

    if (this.props.user.portfolios.map(p => p.ticker_id).includes(this.props.ticker.id)) {
      const portfolios = this.props.user.portfolios.map(p => (p.ticker_id === this.props.ticker.id ? p : null))
      this.setState({
        inUserPortfolio: true,
        portfolios: portfolios
      })
    }


  }


  render(){
    return (
      <div>
        {console.log(this.state.tickerInfo)}
        {console.log(this.props.ticker)}
        {this.state.inUserPortfolio ? <TickerPortfolioInfo tickerBackEnd={this.props.ticker} tickerInfo={this.state.tickerInfo}/>
        :
        <TickerInfo tickerBackEnd={this.props.ticker} tickerInfo={this.state.tickerInfo}/>}
        <TickerPurchase tickerBackEnd={this.props.ticker} tickerInfo={this.state.tickerInfo} user={this.props.user} refreshUser={this.props.refreshUser}/>
      </div>
    )
  }



}




export default TickerContainer
