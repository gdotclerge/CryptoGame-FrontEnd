import React from 'react'
import Adapter from '../../adapter'

class TickerListItem extends React.Component {

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
        {this.state.ticker.rank}<br></br>
        {this.state.ticker.symbol}<br></br>
        {this.state.ticker.name}<br></br>
        {this.state.ticker.price_usd}<br></br>
      </div>
    )
  }





}

export default TickerListItem
