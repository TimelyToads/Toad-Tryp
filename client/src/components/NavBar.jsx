import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
  },
  {
    path: '/login'
  },
  {
    path: '/signup'
  }
];

const NavBar = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </div>
  </Router>
);

export default NavBar;