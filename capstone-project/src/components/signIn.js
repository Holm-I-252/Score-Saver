import React, { Component } from "react";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      createName: "",
      createUsername: "",
      createPass: "",
      signInUsername: "",
      signInPass: "",
    };
    this.handleNewName = this.handleNewName.bind(this);
    this.handleNewUsername = this.handleNewUsername.bind(this);
    this.handleNewPass = this.handleNewPass.bind(this);
    this.handleLogInUsername = this.handleLogInUsername.bind(this);
    this.handleLogInPass = this.handleLogInPass.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleLogInSubmit = this.handleLogInSubmit.bind(this);
  }

  // Functions to handle the state change for each input

  handleNewName(event) {
    this.setState({ createName: event.target.value });
  }

  handleNewUsername(event) {
    this.setState({ createUsername: event.target.value });
  }

  handleNewPass(event) {
    this.setState({ createPass: event.target.value });
  }

  handleLogInUsername(event) {
    this.setState({ signInUsername: event.target.value });
  }

  handleLogInPass(event) {
    this.setState({ signInPass: event.target.value });
  }

  // Functions to trigger on submit

  handleLogInSubmit(event) {
    event.preventDefault();
    console.log(
      `Logged in. Username: ${this.state.signInUsername} Password: ${this.state.signInPass}`
    );
    if (this.state.signInUsername === "" || this.state.signInPass === "") {
      alert("Please enter values in all fields");
    } else {
      this.props.setStateUser(this.state.signInUsername);
      this.props.setStateDisplay("");
    }
  }

  handleNewUser(event) {
    event.preventDefault();
    console.log(
      `Created New User. Name: ${this.state.createName} Username: ${this.state.createUsername} Password: ${this.state.createPass}`
    );
    this.props.setStateUser(this.state.createUsername);
    this.props.setStateDisplay("");
  }

  render() {
    return (
      <div className="signInCard">
        <h2 className="signInTitle">Sign In</h2>
        <form className="signIn" onSubmit={this.handleLogInSubmit}>
          <input
            className="signInName"
            placeholder="Enter Username"
            value={this.state.signInUsername}
            onChange={this.handleLogInUsername}
          ></input>
          <input
            className="signInPass"
            placeholder="Enter Password"
            value={this.state.signInPass}
            onChange={this.handleLogInPass}
          ></input>
          <input className="submitBtn" type="submit"></input>
        </form>
        <h2 className="createUserTitle">Sign Up</h2>
        <form className="createUser" onSubmit={this.handleNewUser}>
          <input
            className="createName"
            placeholder="Enter Name"
            value={this.state.createName}
            onChange={this.handleNewName}
          ></input>
          <input
            className="createUsername"
            placeholder="Enter username"
            value={this.state.createUsername}
            onChange={this.handleNewUsername}
          ></input>
          <input
            className="createPassword"
            placeholder="Enter Password"
            value={this.state.createPass}
            onChange={this.handleNewPass}
          ></input>
          <input className="submitBtn" type="submit"></input>
        </form>
      </div>
    );
  }
}

export default SignIn;
