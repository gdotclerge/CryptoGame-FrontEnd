import React from 'react'
import { Redirect } from 'react-router'
import Adapter from '../../adapter'

class TickerSymbol extends React.Component {
  state = {
    redirect: false
  }


  render = () => {
    console.log(this.props.tickerSearchTerm.symbol)
    if (this.state.redirect) {
      let symbol = `/${this.props.tickerSearchTerm.symbol}`
      return <Redirect push to={symbol} />;
    }

    return (
      <div>
        <p onClick={this.handleTickerClick} >
          {this.props.tickerSearchTerm.name} ({this.props.tickerSearchTerm.symbol}) <br/>
          Ranked: {this.props.tickerSearchTerm.rank}
        </p>
      </div>
    )
  }

  handleTickerClick = () => {
    console.log("clicked")
    this.setState({redirect: true})
  }


}

export default TickerSymbol
