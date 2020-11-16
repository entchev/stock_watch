import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="auth-button"><Link to="/login">Login</Link></button>
      <button className="auth-button"><Link to="/signup">Sign up</Link></button>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h3 className="user-login">Hello, {currentUser.username}</h3>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
