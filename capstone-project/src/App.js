import React, { Component } from "react";
import "./App.css";
import Teams from "./components/Teams";
import Standings from "./components/Standings";
import Score from "./components/Score";
import Arsenal from "./components/teams/Arsenal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "home",
    };
  }

  render() {
    return (
      <div className="App">
        <div id="headder">
          <div className="nav">(add nav links)</div>
          <h1 className="title">Score Saver</h1>
          <div className="account">
            <h3 className="userName">Welcome (enter name)!</h3>
            <p>Account (add link)</p>
          </div>
        </div>
        <div id="contentArea">
          <Teams />
          <Score />
          <Arsenal />
          <Standings />
        </div>
      </div>
    );
  }
}

export default App;
