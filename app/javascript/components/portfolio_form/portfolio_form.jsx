import React from 'react';
import { withRouter } from 'react-router';

class PortfolioForm extends React.Component {
  constructor(props) {
    super(props);
    this.symbol = props.symbol;
    this.name = props.name;
    this.user_id = current_user.id;
    this.stock_id = props.stock_id;
    this.state = {
      name: null,
      symbol: null,
      amount_owned: 1,
      purchase_price: 99
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateBack = this.navigateBack.bind(this);
  }

  navigateBack() {
    this.props.history.push('/');
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('portfolio_item[name]', this.name);
    formData.append('portfolio_item[symbol]', this.symbol);
    formData.append('portfolio_item[user_id]', this.user_id);
    formData.append('portfolio_item[stock_id]', this.stock_id);
    
    formData.append('portfolio_item[amount_owned]', this.state.amount_owned);
    formData.append('portfolio_item[purchase_price]', this.state.purchase_price);


    this.props.createPortfolioItem(formData);
    this.navigateBack();
  }

  render() {
    const { amount_owned, purchase_price } = this.state;
    const name = this.name;
    const symbol = this.symbol;

    return (
      <div className="new-item-container">
        <div className="new-item-form">
          <h3 className="new-item-title">Add to your Portfolio</h3>

          <form onSubmit={this.handleSubmit}>

            <label className="item-field">Company name</label>
            <input
              type="text"
              disabled
              value={name}
              className="item-field"
            />

            <label className="item-field">Stock symbol</label>
            <input
              type="text"
              disabled
              value={symbol}
              className="item-field"
            />

            <label className="item-field">Amount owned</label>
            <input
              min="0.1"
              type="number"
              value={amount_owned}
              onChange={this.update('amount_owned')}
              className="item-field"
            />

            <label className="item-field">Purchase price</label>
            <input
              min="0.1"
              type="number"
              value={purchase_price}
              onChange={this.update('purchase_price')}
              className="item-field"
            />

            <hr />

            <div className="button-holder">
              <input
                type="submit"
                value="Create Investment"
                className="new-item-button"
              />
            </div>
          </form>

          <div className="button-holder">
            <button
              className="new-item-button"
              onClick={this.navigateBack}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PortfolioForm);
