import React from 'react'
import Adapter from '../../adapter';
import TopTenCryptoList from './TopTenCryptoList';


class TickerContainer extends React.Component {
  state = {
    topTenCryptos: []
  }


  setTopTenTickers = () => {
    Adapter.getTopTenTickers()
    .then(json => {
      this.setState({
        topTenCryptos: json
      })
    })
  }


  componentDidMount = () => {
    this.setTopTenTickers();
    setInterval(this.setTopTenTickers, 7000)
  }


  render(){
    return (
      <div>
        <TopTenCryptoList topTenCryptos={this.state.topTenCryptos}/>
      </div>
    )
  }



}




export default TickerContainer
