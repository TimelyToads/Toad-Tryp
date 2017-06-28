import React from 'react';
import range from 'lodash/range';
import axios from 'axios';
import SearchResults from './SearchResults.jsx';
import Redirect from 'react-router-dom/redirect'
import query from 'query-string'
import AuthenticationHelper from '../../../lib/AuhenticationHelper.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      depart: '',
      arrive: '',
      departdate: '',
      arrivedate: '',
      seats: '',
      redirectTo: null,
      trips: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fetch();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  fetch() {
    const app = this;
    const { depart, arrive, departdate, arrivedate, seats } = this.state;
    axios.get('/api/trips', { 
      params: { depart, arrive, departdate, arrivedate, seats } 
    })
    .then(function (response) {
      app.setState({
        redirectTo: '/searchresults',
        trips: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {

    let s = range(1,6);
    const { redirectTo, trips, depart, arrive } = this.state;
    return (
      <div className="search">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input type="text" name="depart" placeholder="Depart City" value={this.state.depart} onChange={this.handleChange}/>
          <input type="text" name="arrive" placeholder="Arrive City" value={this.state.arrive} onChange={this.handleChange}/>
          
          <input type="text" name="departdate" placeholder="Depart Date" value={this.state.departdate} onChange={this.handleChange}/>
          <input type="text" name="arrivedate" placeholder="Arrive Date" value={this.state.arrivedate} onChange={this.handleChange}/>
          
          <select name="seats" value={this.state.seats} onChange={this.handleChange}>
            <option key="Seats" value="#" >Seats</option>
            {s.map( (n, i) => {
              return <option key={i} value={n}>{n}</option>
            })}
          </select>
          <button type="submit">Find Tryp</button>
        </form>
        {redirectTo && (
          <Redirect from={'/'} push to={{
            pathname: redirectTo,
            state: { trips, depart, arrive }
          }}/>
        )}

      </div>
    )
  }
}


export default Search;