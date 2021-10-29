import axios from "axios";
import React, { Component } from "react";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      createName: "",
      createUsername: "",
      createPass: "",
      createTeam: "Arsenal",
      signInUsername: "",
      signInPass: "",
    };
    this.handleNewName = this.handleNewName.bind(this);
    this.handleNewUsername = this.handleNewUsername.bind(this);
    this.handleNewPass = this.handleNewPass.bind(this);
    this.handleNewTeam = this.handleNewTeam.bind(this);
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

  handleNewTeam(event) {
    this.setState({ createTeam: event.target.value });
  }

  handleLogInUsername(event) {
    this.setState({ signInUsername: event.target.value });
  }

  handleLogInPass(event) {
    this.setState({ signInPass: event.target.value });
  }

  // Functions to trigger on submit

  async handleLogInSubmit(event) {
    event.preventDefault();
    let userExists = false;
    let userTeam = "";

    let res = await axios.get("http://localhost:4040/api/data");
    let data = res.data;
    data.forEach((element) => {
      if (
        element.username === this.state.signInUsername &&
        element.password === this.state.signInPass
      ) {
        userExists = true;
        console.log(element.fave_team);
        userTeam = element.fave_team;
      }
    });

    if (this.state.signInUsername === "" || this.state.signInPass === "") {
      alert("Please enter values in all fields");
    } else if (userExists === false) {
      alert(
        "Incorrect username or password. Please try again or create an account."
      );
    } else {
      this.props.setStateUser(this.state.signInUsername);
      this.props.setStateDisplay("");
      this.props.setStateUserTeam(userTeam);
      console.log(userTeam);
    }
  }

  async handleNewUser(event) {
    event.preventDefault();
    let user = {
      name: this.state.createName,
      username: this.state.createUsername,
      password: this.state.createPass,
      faveTeam: this.state.createTeam,
    };

    let res = await axios.post("http://localhost:4040/api/addData", user);
    console.log(res.data);

    this.props.setStateUser(this.state.createUsername);
    this.props.setStateDisplay("");
    this.props.setStateUserTeam(this.state.createTeam);
  }

  render() {
    return (
      <div className="signInCard">
        <div className="signIn">
          <h2 className="signInTitle">Sign In</h2>
          <form className="signInForm" onSubmit={this.handleLogInSubmit}>
            <input
              className="signInName"
              placeholder="Enter Username"
              value={this.state.signInUsername}
              onChange={this.handleLogInUsername}
            ></input>
            <input
              type="password"
              className="signInPass"
              placeholder="Enter Password"
              value={this.state.signInPass}
              onChange={this.handleLogInPass}
            ></input>
            <input className="submitBtn" type="submit"></input>
          </form>
        </div>
        <div className="createUser">
          <h2 className="createUserTitle">Sign Up</h2>
          <form className="createUserForm" onSubmit={this.handleNewUser}>
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
              type="password"
              className="createPassword"
              placeholder="Enter Password"
              value={this.state.createPass}
              onChange={this.handleNewPass}
            ></input>
            <label for="teams" className="createTeam">
              Choose a favorite team:
              <select
                name="teams"
                id="selectTeam"
                value={this.state.createTeam}
                onChange={this.handleNewTeam}
              >
                <option value="Arsenal">Arsenal</option>
                <option value="Aston Villa">Aston Villa</option>
                <option value="Brentford">Brentford</option>
                <option value="Brighton">Brighton</option>
                <option value="Burnley">Burnley</option>
                <option value="Chelsea">Chelsea</option>
                <option value="Crystal Palace">Crystal Palace</option>
                <option value="Everton">Everton</option>
                <option value="Leeds United">Leeds United</option>
                <option value="Leicester City">Leicester</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Man City">Manchester City</option>
                <option value="Man United">Manchester United</option>
                <option value="Newcastle">Newcastle</option>
                <option value="Norwich">Norwich</option>
                <option value="Southampton">Southampton</option>
                <option value="Tottenham">Tottenham</option>
                <option value="Watford">Watford</option>
                <option value="West Ham">West Ham</option>
                <option value="Wolves">Wolverhampton</option>
              </select>
            </label>
            <input className="submitBtn" type="submit"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
