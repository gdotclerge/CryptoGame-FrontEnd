

class Adapter {




// TICKER FETCH REQUESTS
  static getTickersInit = () => {
    return fetch(`http://localhost:3001/api/v1/tickers`)
    .then(resp => resp.json())
  }

  static getTickerInfo = (search_term) => {
    return fetch(`https://api.coinmarketcap.com/v1/ticker/${search_term}/`)
    .then(resp => resp.json())
    .then(json => json[0])
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
