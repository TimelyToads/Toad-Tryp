import React from 'react';
import range from 'lodash/range'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      depart: '',
      arrive: '',
      departdate: '',
      arrivedate: '',
      seats: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    //redirect to search page do axios request to server with current state
  }
  handleChange(e) {
    console.log(e.target);
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }
  render() {
    let s = range(1,6);
    return (
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
    );
  }
}


export default Search;