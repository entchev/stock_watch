import * as APIUtil from '../util/stock_api_util';

export const RECEIVE_ALL_STOCKS = 'RECEIVE_ALL_STOCKS';
export const RECEIVE_SINGLE_STOCK = 'RECEIVE_SINGLE_STOCK';
export const RECEIVE_STOCK_ERRORS = 'RECEIVE_STOCK_ERRORS';

export const requestAllStocks = () => (dispatch) => {
  return APIUtil.fetchAllStocks()
    .then(stocks => { dispatch(receiveAllStocks(stocks)) });
}

export const requestSingleStock = (id) => (dispatch) => {
  return APIUtil.fetchSingleStock(id).then(stock => {
    dispatch(receiveSingleStock(stock));
    return stock;
  });
}

export const receiveAllStocks = stocks => ({
  type: RECEIVE_ALL_STOCKS,
  stocks
});

export const receiveSingleStock = stock => ({
  type: RECEIVE_SINGLE_STOCK,
  stock,
});

export const receiveStockErrors = errors => ({
  type: RECEIVE_STOCK_ERRORS,
  errors
});
