import * as APIUtil from '../util/portfolio_api_util';

export const RECEIVE_PORTFOLIO_ITEMS = 'RECEIVE_PORTFOLIO_ITEMS';
export const RECEIVE_PORTFOLIO_ITEM = 'RECEIVE_PORTFOLIO_ITEM';

export const receivePortfolioItems = portfolio_items => ({
  type: RECEIVE_PORTFOLIO_ITEMS,
  portfolio_items,
});

export const receivePortfolioItem = portoflio_item => ({
  type: RECEIVE_PORTFOLIO_ITEM,
  portoflio_item,
});

export const fetchPortfolioItems = filters => dispatch => (
  APIUtil.fetchPortfolioItems(filters).then(portfolio_items => (
    dispatch(receivePortfolioItems(portfolio_items))
  ))
);

export const fetchPortfolioItem = id => dispatch => (
  APIUtil.fetchPortfolioItem(id).then(payload => (
    dispatch(receivePortfolioItem(payload))
  ))
);

export const createPortfolioItem = portoflio_item => dispatch => (
  APIUtil.createPortfolioItem(portoflio_item).then(portoflio_item => (
    dispatch(receivePortfolioItem(portoflio_item))
  ))
);
