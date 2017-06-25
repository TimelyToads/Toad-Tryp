import React from 'react';
import range from 'lodash/range';
import axios from 'Axios';
import SearchResults from './SearchResults.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      depart: '',
      arrive: '',
      departdate: '',
      arrivedate: '',
      seats: '',
      trips: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    //redirect to search page do axios request to server with current state
    e.preventDefault();
    this.fetch();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  fetch() {
    const app = this;
    console.log('this is fetching the following: ', this.state)
    axios.get('/trips', { 
      params: this.state 
    })
    .then(function (response) {
      console.log('this is properly responding', response);
      app.setState({
        depart: app.state.depart,
        arrive: app.state.arrive,
        departdate: app.state.departdate,
        arrivedate: app.state.arrivedate,
        seats: app.state.seats,
        trips: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    let s = range(1,6);
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="depart" placeholder="Depart" value={this.state.depart} onChange={this.handleChange}/>
          <input type="text" name="arrive" placeholder="Arrive" value={this.state.arrive} onChange={this.handleChange}/>
          <input type="text" name="departdate" placeholder="Depart Date" value={this.state.departdate} onChange={this.handleChange}/>
          <input type="text" name="arrivedate" placeholder="Arrive Date" value={this.state.arrivedate} onChange={this.handleChange}/>
          
          <select name="seats" value={this.state.seats} onChange={this.handleChange}>
            {s.map( (n, i) => {
              return <option key={i} value={n}>{n}</option>
            })}
          </select>
          <button type="submit">Find Tryp</button>
        </form>
        {this.state.trips.length > 0 ? <SearchResults trips={this.state.trips} /> : ''}

      </div>
    )
  }
}


export default Search;