import React from 'react';
import { Route, Switch } from 'react-router-dom'

//Import components
import Home from '../Home.jsx';
import GoogleAuth from '../Authentication/GoogleAuth.jsx';
import Login from '../Authentication/Login.jsx';
import Logout from '../Authentication/Logout.jsx';
import NotFound from '../Navigation/NotFound.jsx';
import SearchResults from '../Search/SearchResults.jsx';
import Trip from '../Trips/Trip.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Profile from '../Users/Profile.jsx';
import Signup from '../Authentication/Signup.jsx';
import NewTrip from '../Trips/NewTrip.jsx';

//Associate each route URL path with a component
const routes = [
  { path:          '/',
    exact:         true,
    component:     Home
  },
  { path:         '/googleauth',
    component:    GoogleAuth
  },
  { path:         '/login',
    component:    Login
  },
  { path:         '/logout',
    component:    Logout
  },
  { path:         '/signup',
    component:    Signup
  },
  {
    path:         '/newtrip',
    component:    NewTrip,
  },
  {
    path:         '/searchresults',
    component:    SearchResults
  },
  {
    path:         '/trip/:tripId',
    component:    Trip
  },
  {
    path:         '/trips/:username',
    component:    Dashboard
  },
  {
    path:         '/profile/:username',
    component:    Profile
  },
  {
    path:         '*',
    component:    NotFound
  }
];

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

const MyRoutes = (props) => (
  <Switch>
    {console.log('Rendering MyRoutes', props)}
    {routes.map((route, index) => {
      return <PropsRoute
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
        authenticateUserFunc={props.authenticateUserFunc}
        setUserObject={props.setUserObject}
        currentUser={props.currentUser}
        isAuthenticated={props.isAuthenticated}
      />}
    )}
  </Switch>
);

export default MyRoutes;
