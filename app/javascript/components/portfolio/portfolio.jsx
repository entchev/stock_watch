import React from 'react';
import { Link } from 'react-router-dom';
import Element from './element';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  }
}

  componentDidMount() {
    this.props.requestPortfolioItems();
    const pointerToThis = this;
    console.log(pointerToThis);
  }

  render() {

    return (
      <div>
        <h2>Investments</h2><br/>
        <div className="portfolio-container">
          <table className="portfolio-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Symbol</th>
                <th>Shares owned</th>
                <th>Cost/Share</th>
                <th>Current price</th>
                <th>Market value</th>
                <th>Total gain</th>
              </tr>
            </thead>
            <tbody>
              <Element symbol="aapl" />
            </tbody>
          </table>
        </div>
        <br/><br/><br/>
        <h2>Watchlist</h2><br/>
        <div className="watchlist-container">
          <table className="watchlist-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Symbol</th>
                <th>Current price</th>
                <th>Market value</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    )
  }
}

export default Portfolio;
