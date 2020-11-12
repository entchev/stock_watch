import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'
import StockPrice from './stocks/stock_detail'

const App = () => (
  <div>
    <header>
      <h1 className="title">Stock Watch</h1>
      <h1 className="title-login"><GreetingContainer /></h1>
    </header>
    <div>
      <br/>
      <h3 className="index-info">Stock Watch is a portfolio management app, designed to help you
        manage your investments and keep track of potential opportunities.
        {<br></br>}{<br></br>}Make a selection from our list of top stocks on the left. Alternatively, 
        you can {<Link to="/login">login</Link>} or {<Link to="/signup">sign up</Link>} 
      </h3>
    </div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App 
