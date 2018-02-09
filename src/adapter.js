

class Adapter {




// TICKER FETCH REQUESTS
  getTickerIDs = (tickerID) => {
    return fetch(`http://localhost:3001/api/v1/tickers`)
    .then(resp => resp.json())
  }

  static getTopTenTickers = () => {
    return fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
    .then(resp => resp.json())
  }


  // USER FETCH REQUESTS


  static login = (username, password) => {
    return fetch('http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaton/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then(res => res.json());
  }


  getUser = () => {
    return fetch(`http://localhost:3001/api/v1/tickers`)
    .then(resp => resp.json())
  }

}


export default Adapter
