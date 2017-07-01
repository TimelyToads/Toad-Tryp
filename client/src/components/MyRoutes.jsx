import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

//Import components
import Home from './Home.jsx';
import GoogleAuth from './GoogleAuth.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import NotFound from './NotFound.jsx';
import SearchResults from './SearchResults.jsx';
import Trip from './Trip.jsx';
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
    component: NewTrip
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
    path: '/profile/:username',
    component: Profile
  },
  {
    path: '*',
    component: NotFound
  }
];



const MyRoutes = (props) => (
  <Switch>
  {console.log('Rendering MyRoutes', props)}
    {routes.map((route, index) => {
      if (route.path === '/login') {
        return <Route 
          key={index}
          exact={route.exact}
          path='/login' 
          render={ () => 
            <Login isAuthenticated={props.isAuthenticated} authenticateUserFunc={props.authenticateUserFunc} />} 
        />;
      } else if (route.path === '/create') {
        return <Route 
          key={index}
          exact={route.exact}
          path='/create' 
          render={ () => 
            <Create isAuthenticated={props.isAuthenticated} authenticateUserFunc={props.authenticateUserFunc} />} 
        />;
      } else {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />;
      }
    }
    )}
  </Switch>
);

export default MyRoutes;
