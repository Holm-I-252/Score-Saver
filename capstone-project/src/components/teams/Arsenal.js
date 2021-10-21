import React, { Component } from "react";
import axios from "axios";

class Arsenal extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      teamMatch: [],
    };
  }

  getScore() {
    axios.get("http://localhost:4040/api/match").then((res) => {
      this.setState({ data: res.data.matches });
      this.state.data.forEach((element) => {
        if (element.homeTeam.name === "Arsenal FC") {
          this.setState({ teamMatch: element });
        }
      });
    });
  }

  componentDidMount() {
    this.getScore();
  }

  render() {
    let info = this.state.teamMatch;
    // let score = (
    //   <li className="teamScore">
    //     <h4 className="awayAndHome">
    //       {info.awayTeam.name} (away) vs. (home) {info.homeTeam.name}
    //     </h4>
    //     <h4 className="scores">
    //       {info.score.fullTime.awayTeam} - {info.score.fullTime.homeTeam}
    //     </h4>
    //   </li>
    // );
    console.log(info);
    return (
      <div>
        <div></div>
      </div>
    );
  }
}

export default Arsenal;
