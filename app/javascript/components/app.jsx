import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import { Route } from 'react-router-dom'
import StockPrice from './stocks/stock_detail'

const App = () => (
  <div>
    <header>
      <h1 class="title">Stock Watch --Alpha--</h1>
      <h1 class="title-login"><GreetingContainer /></h1>
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App 
