import React from 'react'
import {
  Link,
} from 'react-router-dom'

import MyRoutes from './MyRoutes.jsx'


// Each logical "route" a component. We want to
// render them when the path matches the current URL.

<<<<<<< HEAD
const routes = [
  { path: '/',
    exact: true,
    main: Home
  },
  { path: '/login',
    main: Login
  },
  { path: '/signup',
    main: Signup
  },
  {
    path:'/search',
    main: SearchResults
  },
  {
    path:'*',
    main: NotFound
  }
]

<<<<<<< HEAD


const SidebarExample = () => (
=======
const NavBar = (props) => (
>>>>>>> Refactoring to handle redirect with data
  <Router history={browserHistory}>
=======
const NavBar = (props) => (
>>>>>>> Refactor to separate NavBar from MyRoutes and Redirect to /search from search submission
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Login /></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </div>
)

export default NavBar;