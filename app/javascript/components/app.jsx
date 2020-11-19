import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'
import StockIndexContainer from '../components/stocks/stock_index_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import { Route, Switch, Link, Redirect, HashRouter } from 'react-router-dom'
import StockDetailContainer from './stocks/stock_detail_container'
import PortfolioFormContainer from './portfolio/portfolio_form_container'
import PortfolioContainer from './portfolio/portfolio_container'


const App = () => (
  <section>
    <header>
      <h1 className="title">Stock Watch</h1>
      <h1 className="title-login"><GreetingContainer /></h1>
    </header>
    {<br></br>}{<br></br>}
    <div className="stock-index">
      <br/>
      <h3 className="stock-detail">
        <Route exact path="/">
          <img className="index-img" src="../assets/stock-exchange.jpg" alt="Stock Exchange" />
          <br /><br />
          Stock Watch is a portfolio management app, designed to help you
          manage your investments and keep track of potential opportunities. We are currently working
          predominantly with US stocks, with plans to roll out in the UK soon, so stay tuned!
          {<br></br>}{<br></br>}Make a selection from our list of top stocks on the left. Alternatively, 
          you can log in or sign up using the top-right buttons. Having an account allows the creation of a personal portfolio and watchlist so you can keep track of 
          current or potential investments.
        </Route>
        <Route path="/stock/:stockId" component={StockDetailContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/portfolio_items/new/" component={PortfolioFormContainer} />
        <ProtectedRoute path="/api/portfolio_items/" component={PortfolioContainer} />
      </h3>
      <Route path="/" component={StockIndexContainer} />
    </div>
  </section>
);

export default App 
