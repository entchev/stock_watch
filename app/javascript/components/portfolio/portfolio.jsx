import React from 'react';
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

    const items = this.props.state.entities.portfolio_items
    let unpacked = Object.values(items)
    const content = unpacked.map((item) =>
      <Element key ={item.id} name={item.name} symbol={item.symbol} amount={item.amount_owned} cost={item.purchase_price} />
    );    

    return (
      <div>
        <br/><br/><br/>
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
              {content}
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
          <br/><br/>
          <p>
            Please note, current price is valid as of market close on the previous market day*
          </p>
        </div>
      </div>
    )
  }
}

export default Portfolio;
