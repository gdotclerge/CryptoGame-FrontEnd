import React from 'react'
import Adapter from '../../adapter';
import TickerInfo from './TickerInfo';
import TickerPortfolioInfo from './TickerPortfolioInfo';
import TickerPurchase from './TickerPurchase';
import TickerSell from './TickerSell';

class TickerContainer extends React.Component {
  state = {
    tickerInfo: {},
    inUserPortfolio: false,
    portfolios: [],
    buttonText: "Sell"
  }


  setTicker = () => {
    console.log("Set Ticker")
    Adapter.getTickerInfo(this.props.ticker.search_term)
    .then( (json)=> {this.setState({
      tickerInfo: json
    })})
  }

  setButtonText = () => {
    if (this.state.buttonText === "Sell") {
      this.setState({
        buttonText: "Buy"
      })} else {
        this.setState({
          buttonText: "Sell"
        })
      }
    }


  componentDidMount = () => {
    this.setTicker();
    setInterval(this.setTicker, 7000)

    if (this.props.user.portfolios.map(p => p.ticker_id).includes(this.props.ticker.id)) {
      const portfolios = this.props.user.portfolios.filter(p => p.ticker_id === this.props.ticker.id)
      this.setState({
        inUserPortfolio: true,
        portfolios: portfolios
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.portfolios.map(p => p.ticker_id).includes(nextProps.ticker.id)) {
      const portfolios = nextProps.user.portfolios.filter(p => p.ticker_id === nextProps.ticker.id)
      this.setState({
        inUserPortfolio: true,
        portfolios: portfolios
      })
    } else {
      this.setState({
        inUserPortfolio: false,
        portfolios: [],
        buttonText: "Sell"
      })
    }
  }


  render(){
    return (
      <div>
        {console.log(this.state.tickerInfo)}
        {console.log(this.props.ticker)}

        {this.state.inUserPortfolio ?
          <TickerPortfolioInfo tickerBackEnd={this.props.ticker} tickerInfo={this.state.tickerInfo} portfolios={this.state.portfolios} buttonText={this.state.buttonText} setButtonText={this.setButtonText}/>
            :
          <TickerInfo tickerBackEnd={this.props.ticker} tickerInfo={this.state.tickerInfo}/>
        }

        {this.state.buttonText === "Sell" ?
          <TickerPurchase tickerBackEnd={this.props.ticker} tickerInfo={this.state.tickerInfo} user={this.props.user} refreshUser={this.props.refreshUser}/>
            :
          <TickerSell tickerBackEnd={this.props.ticker} tickerInfo={this.state.tickerInfo} user={this.props.user} portfolios={this.state.portfolios} refreshUser={this.props.refreshUser}/>
        }

      </div>
    )
  }

}




export default TickerContainer
