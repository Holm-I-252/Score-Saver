import React, { Component } from "react";
import axios from "axios";

class Standings extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  getStandings() {
    axios.get("http://localhost:4040/api/standings").then((res) => {
      this.setState({ data: res.data.standings[0].table });
    });
  }

  componentDidMount() {
    this.getStandings();
  }

  render() {
    let table = this.state.data.map((d) => (
      <li key={d.position} className="tableItem">
        {d.position}. {d.team.name}
      </li>
    ));
    return (
      <div className="standingsDiv">
        <h1 className="standingsTitle">Current Standings</h1>
        <div id="standings">{table}</div>
      </div>
    );
  }
}

export default Standings;
