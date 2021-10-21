import React, { Component } from "react";
import axios from "axios";

class Leicester extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      teamMatch: [],
      away: "",
      home: "",
      awayScore: "",
      homeScore: "",
    };
  }

  async getScore() {
    let res = await axios.get("http://localhost:4040/api/match");
    this.setState({ data: res.data.matches });

    this.state.data.forEach((element) => {
      if (
        element.homeTeam.name === "Leicester City FC" ||
        element.awayTeam.name === "Leicester City FC"
      ) {
        this.setState({ teamMatch: element });
      }
    });

    let info = this.state.teamMatch;
    console.log(info);

    this.setState({ away: info.awayTeam.name });
    this.setState({ home: info.homeTeam.name });
    this.setState({ awayScore: info.score.fullTime.awayTeam });
    this.setState({ homeScore: info.score.fullTime.homeTeam });
  }

  componentDidMount() {
    this.getScore();
  }

  render() {
    return (
      <div className="teamScores">
        <h4 className="awayAndHome">
          {this.state.away} (away) vs. (home) {this.state.home}
        </h4>
        <h4 className="scores">
          {this.state.awayScore} - {this.state.homeScore}
        </h4>
      </div>
    );
  }
}

export default Leicester;
