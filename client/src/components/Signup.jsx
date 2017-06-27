import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: false,

    }
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
          <form className="signup-form">
            <input placeholder="E-mail Address"/><br/>
            <input placeholder="First name"/><br/>
            <input placeholder="Last name"/><br/>
            <input placeholder="Phone number"/><br/>
            <input placeholder="Image URL (optional)"/><br/>
            <input placeholder="Create a Password"/><br/>

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;