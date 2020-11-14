import { connect } from 'react-redux';
import StockDetail from './stock_detail';
import { requestSingleStock } from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps) => {
  const stock = state.entities.stock[ownProps.match.params.stockId];

  return {
    stock,
  };
};

const mapDispatchToProps = dispatch => ({
  requestSingleStock: id => dispatch(requestSingleStock(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockDetail);
