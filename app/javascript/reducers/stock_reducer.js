import {
  RECEIVE_ALL_STOCKS,
  RECEIVE_SINGLE_STOCK
} from '../actions/stock_actions';

const stockReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_STOCKS:
      return Object.assign({}, state, action.stocks);
    case RECEIVE_SINGLE_STOCK:
      // const stock = { [action.stock.stock.id]: action.stock };
      return Object.assign({}, state, action.stock );
    default:
      return state;
  }
};

export default stockReducer;
