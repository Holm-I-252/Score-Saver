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
      <tr key={d.position} className="tableItem">
        <td>{d.position}</td>
        <td>{d.team.name}</td>
        <td>{d.playedGames}</td>
        <td>{d.won}</td>
        <td>{d.draw}</td>
        <td>{d.lost}</td>
        <td>{d.points}</td>
      </tr>
    ));
    return (
      <div className="standingsDiv">
        <h1 className="standingsTitle">Current Standings</h1>
        <table id="standings">
          <tr>
            <th>Place</th>
            <th>Team</th>
            <th>Games Played</th>
            <th>Won</th>
            <th>Draw</th>
            <th>Lost</th>
            <th>Points</th>
          </tr>
          {table}
        </table>
      </div>
    );
  }
}

export default Standings;
