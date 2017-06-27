import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      img_url: '',
      phone_number: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    this.fetch();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  fetch() {
    const app = this;

    axios.post('/api/users', this.state)
    .then(function (response) {
      console.log('Successfully fetching from db in Search Component', response);
      app.setState({
        fireRedirect: true,
        trips: response.data
      });
      alert("Your Account has been successfully created!");
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
      <div className="signup-page">
        <div>
          <h1>
            Signup for ToadTryp
          </h1>

          <p>Sign up with Google</p>
          <p> or </p>
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <input type="text" name="email" placeholder="E-mail Address" value={this.state.email} onChange={this.handleChange}/><br/>
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/><br/>
            <input type="text" name="first_name" placeholder="First name" value={this.state.first_name} onChange={this.handleChange}/><br/>
            <input type="text" name="last_name" placeholder="Last name" value={this.state.last_name} onChange={this.handleChange}/><br/>
            <input type="text" name="phone_number" placeholder="Phone number" value={this.state.phone_number} onChange={this.handleChange}/><br/>
            <input type="text" name="img_url" placeholder="Image URL (optional)" value={this.state.img_url} onChange={this.handleChange}/><br/>
            <input type="text" name="password" placeholder="Create a Password" value={this.state.password} onChange={this.handleChange}/><br/>

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;