import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  browserHistory
} from 'react-router-dom'

import NavBar from './components/NavBar.jsx';
import MyRoutes from './components/MyRoutes.jsx';


<<<<<<< HEAD
class App extends React.Component {
<<<<<<< HEAD
  constructor() {
    super();


  }

  componentDidMount() {


  }

=======
  constructor(props) {
    super(props);
    this.state = {
      searchData: []
    }
    this.setSearchData = this.setSearchData.bind(this);
  }

  setSearchData(searchData) {
    this.setState({ searchData });
  }
>>>>>>> Refactoring to handle redirect with data
  render () {
    return (
      <div>
        <NavBar />
      </div>
    );
  };
};
=======

const App = () => (
  <Router history={browserHistory}>
    <div>
      <NavBar />
      <MyRoutes />
    </div>
  </Router>
)
>>>>>>> Refactor to separate NavBar from MyRoutes and Redirect to /search from search submission

ReactDOM.render(<App />, document.getElementById('app'))