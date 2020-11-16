import {
  RECEIVE_PORTFOLIO_ITEMS,
  RECEIVE_PORTFOLIO_ITEM
} from '../actions/portfolio_actions';

const portfoliosReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_PORTFOLIO_ITEMS:
      return action.portfolio_items;
    case RECEIVE_PORTFOLIO_ITEM:
      const newPortfolioItem = { [action.portfolio_item.id]: action.portfolio_item };
      return Object.assign({}, state, newPortfolioItem);
    default:
      return state;
  }
};

export default portfoliosReducer;
