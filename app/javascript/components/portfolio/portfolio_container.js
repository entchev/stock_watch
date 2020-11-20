import { connect } from 'react-redux'
import { requestPortfolioItems } from '../../actions/portfolio_actions';
import selectAllPortfolioItems from '../../reducers/selectors';
import Portfolio from './portfolio';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  requestPortfolioItems: () => dispatch(requestPortfolioItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
