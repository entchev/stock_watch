import React from 'react';
import { withRouter } from 'react-router';

class PortfolioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount_owned: 1,
      purchase_price: 99,
      location: this.props.location.pathname,
    };

    this.fetchCompanyName = this.fetchCompanyName.bind(this)
    this.fetchCompanySymbol = this.fetchCompanySymbol.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateBack = this.navigateBack.bind(this);
    this.stock_id = this.state.location.substring(this.state.location.lastIndexOf('/') + 1)
  }

  navigateBack() {
    this.props.history.push('/');
  }

  componentDidMount() {
    const pointerToThis = this;
    console.log(pointerToThis);
  }

  fetchCompanyName() {
    let currentStock = this.props.state.entities.stock[this.stock_id];
    return currentStock.name;
  }

  fetchCompanySymbol() {
    let currentStock = this.props.state.entities.stock[this.stock_id];
    return currentStock.symbol;
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('portfolio_item[name]', this.fetchCompanyName());
    formData.append('portfolio_item[symbol]', this.fetchCompanySymbol());
    formData.append('portfolio_item[user_id]', this.props.currentUser.id);
    formData.append('portfolio_item[stock_id]', this.stock_id);
    
    formData.append('portfolio_item[amount_owned]', this.state.amount_owned);
    formData.append('portfolio_item[purchase_price]', this.state.purchase_price);


    this.props.createPortfolioItem(formData);
    this.navigateBack();
  }

  render() {
    const { amount_owned, purchase_price } = this.state;

    return (
      <div className="new-item-container">
        <div className="new-item-form">
          <h3 className="new-item-title">Add to your portfolio</h3>
          <form onSubmit={this.handleSubmit}>

            <label className="item-field">Company name</label>
            <input
              type="text"
              disabled
              value={this.fetchCompanyName()}
              className="item-field"
            />

            <label className="item-field">Stock symbol</label>
            <input
              type="text"
              disabled
              value={this.fetchCompanySymbol()}
              className="item-field"
            />

            <label className="item-field">Shares owned</label>
            <input
              type="number"
              value={amount_owned}
              onChange={this.update('amount_owned')}
              className="item-field"
            />

            <label className="item-field">Purchase price ($)</label>
            <input
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
