import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

//Import components
import Home from './Home.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Signup from './Signup.jsx';
import NotFound from './NotFound.jsx';
import SearchResults from './SearchResults.jsx';
import Trip from './Trip.jsx';
import Profile from './Profile.jsx';
import Create from './Create.jsx';


//Associate each route URL path with a component
const routes = [
  { path:      '/',
    exact:     true,
    component: Home
  },
  { path:       '/login',
    component:  Login
  },
   { path:      '/logout',
    component:  Logout
  },
  { path:       '/signup',
    component:  Signup
  },
  { path:       '/create',
    component:  Create
},
  {
    path:       '/searchresults',
    component:  SearchResults
  },
  {
    path:       '/trip/:tripId',
    component:  Trip
  },
  {
    path:       '/profile/:username',
    component:  Profile
  },
  {
    path:       '*',
    component:  NotFound
  }
]



const MyRoutes = (props) => (
  <Switch>
  {console.log('Rendering MyRoutes', props.authenticateUserFunc)}
    {routes.map((route, index) => {
      if (route.path === '/login') {
        console.log('this is props in the MyRoutes function', props)
        return <Route 
          key={index}
          exact={route.exact}
          path='/login' 
          render={ () => 
            <Login isAuthenticated={props.isAuthenticated} authenticateUserFunc={props.authenticateUserFunc} />} 
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
    )}
  </Switch>
)

export default MyRoutes;
