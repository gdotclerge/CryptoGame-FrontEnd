import React from 'react'
import Adapter from '../../adapter';
import TickerInfo from './TickerInfo';
import TickerPurchase from './TickerPurchase';


class TickerContainer extends React.Component {
  state = {
    tickerInfo: {}
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
  }


  render(){
    return (
      <div>
        {console.log(this.state.tickerInfo)}
        {console.log(this.props.ticker)}
        <TickerInfo tickerBackEnd={this.props.ticker} tickerInfo={this.state.tickerInfo}/>
        <TickerPurchase tickerBackEnd={this.props.ticker} tickerInfo={this.state.tickerInfo} user={this.props.user} refreshUser={this.props.refreshUser}/>
      </div>
    )
  }



}




export default TickerContainer
