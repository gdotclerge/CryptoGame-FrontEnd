import React from 'react'
import Adapter from '../../adapter';
import TickerInfo from './TickerInfo';
import TickerPurchase from './TickerPurchase';


class TickerContainer extends React.Component {
  state = {
    ticker: {}
  }


  setTicker = () => {
    console.log("Set Ticker")
    Adapter.getTickerInfo(this.props.ticker.search_term)
    .then( (json)=> {this.setState({
      ticker: json
    })})
  }


  componentDidMount = () => {
    this.setTicker();
    setInterval(this.setTicker, 7000)
  }


  render(){
    return (
      <div>
        <TickerInfo ticker={this.state.ticker}/>
        <TickerPurchase ticker={this.state.ticker} />
      </div>
    )
  }



}




export default TickerContainer
