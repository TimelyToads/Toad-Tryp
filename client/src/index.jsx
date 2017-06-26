import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  browserHistory
} from 'react-router-dom'

import NavBar from './components/NavBar.jsx';
import MyRoutes from './components/MyRoutes.jsx';

const App = () => (
  <Router history={browserHistory}>
    <div>
      <NavBar />
      <MyRoutes />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))