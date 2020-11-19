import { connect } from 'react-redux'
import { requestPortfolioItems } from '../../actions/portfolio_actions';
import Portfolio from './portfolio';

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = dispatch => ({
  requestPortfolioItems: () => dispatch(requestPortfolioItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);