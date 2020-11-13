import { combineReducers } from 'redux';
import users from './users_reducer';
import stock from './stock_reducer';

const entitiesReducer =  combineReducers({
  stock,
  users
});

export default entitiesReducer;
