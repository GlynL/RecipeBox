import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const type = this.props.type;
    if (type === "register") {
      this.props.authUser(this.state, "register");
    }
    if (type === "login") {
      this.props.authUser(this.state, "login");
    }
    this.setState({
      username: "",
      password: ""
    });
  }

  handleChange(e) {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.type}</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
