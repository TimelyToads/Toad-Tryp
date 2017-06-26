import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

//Import components
import Home from './Home.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import NotFound from './NotFound.jsx';
import SearchSwitch from './SearchSwitch.jsx';

//Associate each route URL path with a component
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
    path:'/searchresults',
    main: SearchSwitch
  },
  {
    path:'*',
    main: NotFound
  }
]


const MyRoutes = () => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    ))}
  </Switch>
)

export default MyRoutes;