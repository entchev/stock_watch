import { connect } from 'react-redux';

import { createPortfolioItem } from '../../actions/portfolio_actions';
import PortfolioForm from './portfolio_form';

const mapStateToProps = (state, props) => {
  const symbol = state.entities.stock[ownProps.match.params.stockId];
  const name = state.entities.stock[ownProps.match.params.stockId];

  return {
    symbol,
    name
  };
};

const mapDispatchToProps = dispatch => ({
  createPortfolioItem: item => dispatch(createPortfolioItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioForm);
