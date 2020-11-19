import { combineReducers } from 'redux';
import users from './users_reducer';
import stock from './stock_reducer';
import portfolio from './portfolios_reducer';


const entitiesReducer =  combineReducers({
  stock,
  users,
  portfolio
});

export default entitiesReducer;
