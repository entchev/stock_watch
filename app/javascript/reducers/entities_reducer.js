import { combineReducers } from 'redux';
import users from './users_reducer';
import stock from './stock_reducer';
import portfolios from './portfolios_reducer';


const entitiesReducer =  combineReducers({
  stock,
  users,
  portfolios
});

export default entitiesReducer;
