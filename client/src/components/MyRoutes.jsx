import React from 'react';
import { Route, Switch } from 'react-router-dom'

//Import components
import Home from './Home.jsx';
import GoogleAuth from './GoogleAuth.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import NotFound from './NotFound.jsx';
import SearchResults from './SearchResults.jsx';
import Trip from './Trip.jsx';
import Trips from './Trips.jsx';
import Profile from './Profile.jsx';
import Create from './Create.jsx';
import NewTrip from './NewTrip.jsx';

//Associate each route URL path with a component
const routes = [
  { path: '/',
    exact: true,
    component: Home
  },
  { path: '/googleauth',
    component: GoogleAuth
  },
  { path: '/login',
    component: Login
  },
  { path: '/logout',
    component: Logout
  },
  { path: '/create',
    component: Create
  },
  {
    path: '/newtrip',
    component: NewTrip,
  },
  {
    path: '/searchresults',
    component: SearchResults
  },
  {
    path: '/trip/:tripId',
    component: Trip
  },
  
  {
    path:       '/trips/:username',
    component:  Trips
  },
  {
    path: '/profile/:username',
    component: Profile
  },
  {
    path: '*',
    component: NotFound
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
<<<<<<< HEAD
    {console.log('Rendering MyRoutes', props)}
    {routes.map((route, index) => {
      return <PropsRoute
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
        authenticateUserFunc={props.authenticateUserFunc}
        currentUser={props.currentUser}
        isAuthenticated={props.isAuthenticated}
      />}
=======
<<<<<<< HEAD
  {console.log('Rendering MyRoutes', props)}
=======
>>>>>>> Work on redirect for Login.
    {routes.map((route, index) => {
      if (route.path === '/login') {
        return <Route 
          key={index}
          exact={route.exact}
          path='/login' 
          render={ () => 
            <Login lol={route} isAuthenticated={props.isAuthenticated} authenticateUserFunc={props.authenticateUserFunc} />} 
        />
      } else if (route.path === '/'){
        return <Route 
          key={index}
          exact={route.exact}
          path='/' 
          render={ () => 
            <Home currentUser={props.currentUser} />} 
        />
      } else if (route.path === '/create') {
        return <Route 
          key={index}
          exact={route.exact}
          path='/create' 
          render={ () => 
            <Create isAuthenticated={props.isAuthenticated} authenticateUserFunc={props.authenticateUserFunc} />} 
        />
      } else {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      }
    }
>>>>>>> Work on redirect for Login.
    )}
  </Switch>
);

export default MyRoutes;
