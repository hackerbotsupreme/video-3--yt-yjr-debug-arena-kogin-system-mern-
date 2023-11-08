// so here we just passed the entered data to the console 
// nect move to the node js part -> app.js file 

import React, { Component } from 'react'

export default class SignUp extends Component {
  // first i need to get the value from them 
  constructor(props) {
    super(props)
    this.state = {
      // i am making the state name as fname 
      fname: "",
      lname: "",
      email: "",
      password: ""
    };
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    // passing e 
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password )
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => this.setState({ lname: e.target.value })} />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />

        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}
