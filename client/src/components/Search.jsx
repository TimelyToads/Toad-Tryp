import React from 'react';
import range from 'lodash/range';
import axios from 'axios';
import SearchResults from './SearchResults.jsx';
import {Redirect} from 'react-router-dom';
import query from 'query-string';
import AuthenticationHelper from '../../../lib/AuhenticationHelper.js';
import moment from 'moment';

// Requirements AirBnB's React-Calendar 
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      depart: '',
      arrive: '',
      date: '',
      seats: '',
      redirectTo: null,
      trips: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fetch();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  fetch() {
    const { depart, arrive, date, seats } = this.state;
    const departdate = moment(date._d).format('YYYY-MM-DD');

    axios.get('/api/trips', { 
      params: { depart, arrive, departdate, seats } 
    })
    .then((response) => {
      this.setState({
        redirectTo: '/searchresults',
        trips: response.data
      });
      console.log(this.state);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {

    let s = range(1, 6);
    const { redirectTo, trips, date, depart, arrive } = this.state;
    const currentUser = this.props.currentUser;
    
    return (
      <div className="search">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input type="text" name="depart" placeholder="Depart City" value={this.state.depart} onChange={this.handleChange}/>
          <input type="text" name="arrive" placeholder="Arrive City" value={this.state.arrive} onChange={this.handleChange}/>
          <SingleDatePicker
            date={this.state.date} // momentPropTypes.momentObj or null
            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          />
          
          <select name="seats" value={this.state.seats} onChange={this.handleChange}>
            <option key="Seats" value="#" >Seats</option>
            {s.map( (n, i) => {
              return <option key={i} value={n}>{n}</option>;
            })}
          </select>
          <button type="submit">Find Tryp</button>
        </form>
        {redirectTo && (
          <Redirect from={'/'} push to={{
            pathname: redirectTo,
            state: { trips, depart, arrive, currentUser }
          }}/>
        )}
      </div>
    );
  }
}


export default Search;