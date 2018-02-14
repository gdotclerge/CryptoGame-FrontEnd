import React from 'react'
import HomeHeader from './HomeHeader'
import HomePortfolio from './HomePortfolio'
import HomeSearchResults from './HomeSearchResults'

class HomeContainer extends React.Component {

  state = {
    filteredSearchTerms: []
  }



  render = () => {
    return (
      <div>
        <h4>Welcome {this.props.user.first_name}!</h4>
        <HomeHeader user={this.props.user} tickers={this.props.tickers}/>
        <input type="text" placeholder="Search" onChange={this.handleSearch}/>
        <HomePortfolio user={this.props.user} filteredSearchTerms={this.state.filteredSearchTerms} />
      </div>
    )
  }

  handleSearch = (e) => {
    console.log(e.target.value)
    let filteredSearchTerms = this.props.tickers.filter( (t) => {
      return t.search_term.startsWith(e.target.value.toLowerCase())
    })

    this.setState({
      filteredSearchTerms: filteredSearchTerms
    })
  }





}

export default HomeContainer
