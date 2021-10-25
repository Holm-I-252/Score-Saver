import axios from "axios";
import React, { Component } from "react";

class Teams extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      data: [],
    };
  }

  getTeams() {
    axios.get("http://localhost:4040/api/home").then((res) => {
      this.setState({ data: res.data.teams });
    });
  }

  componentDidMount() {
    this.getTeams();
  }

  render() {
    let teams = this.state.data.map((d) => (
      <li
        key={d.id}
        className="teamList"
        onClick={() => {
          this.props.setState(d.shortName);
        }}
      >
        <img src={d.crestUrl} alt={d.shortName} className="teamImg"></img>
        <p className="teamName">{d.shortName}</p>
      </li>
    ));
    return (
      <div className="teamDiv">
        <h1 className="teamTitle">Teams</h1>
        <ul id="teamSection">{teams}</ul>
      </div>
    );
  }
}

export default Teams;
