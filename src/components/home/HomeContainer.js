import React from 'react'
import HomeHeader from './HomeHeader'
import HomePortfolio from './HomePortfolio'
import HomeSearchResults from './HomeSearchResults'

const homeContainer = (props) => {
  return (
    <div>
      <h4>Welcome {props.user.first_name}!</h4>
      <HomeHeader user={props.user} tickers={props.tickers}/>
      <input type="text" placeholder="Search"/>
      <HomePortfolio user={props.user} tickers={props.tickers}/>
    </div>
  )



}

export default homeContainer
