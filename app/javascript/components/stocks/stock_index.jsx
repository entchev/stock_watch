import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import StockIndexItem from './stock_index_item'

// import StockDetailContainer from './stock_detail_container'; TO BE DONE
 
class StockIndex extends Component {
  componentDidMount() {
    this.props.requestAllStocks();
  }

  render() {
    const stock = this.props.stock;

    return (
      <section className="stock-index">
        <ul>
          {stock.map(ele => <StockIndexItem key={ele.id} stock={ele} />)}
        </ul>
      </section>
    );
  }
}

export default StockIndex;
