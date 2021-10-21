import React, { Component } from "react";
import axios from "axios";

class LeagueInfo extends Component {
  constructor() {
    super();
    this.state = {
      league: [],
    };
  }

  getInfo() {
    axios.get("http://localhost:4040/api/standings").then((res) => {
      this.setState({ league: res.data });
      console.log(this.state.league);
    });
  }

  componentDidMount() {
    this.getInfo();
  }

  render() {
    console.log(this.state.league);
    let info = (
      <div>
        <h1>League Info</h1>
        <ul className="infoList">
          <li>League: Premire League</li>
          <li>Area: England</li>
          {/* <li>Current Match Day: {this.state.league.season.currentMatchday}</li> */}
          <li>Start Date: 2021-08-13</li>
          <li>End Date: 2022-05-22</li>
          {/* <li>Info Last Updated: {this.state.league.lastUpdated}</li> */}
        </ul>
      </div>
    );
    return <div>{info}</div>;
  }
}

export default LeagueInfo;
