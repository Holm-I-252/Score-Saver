import React, { Component } from "react";
import axios from "axios";

class Tottenham extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      teamMatch: [],
      away: "",
      home: "",
      awayScore: "",
      homeScore: "",
      matchData: [],
      matchImg: {},
    };
  }

  async getScore() {
    let res = await axios.get("http://localhost:4040/api/match");
    this.setState({ data: res.data.matches });

    this.state.data.forEach((element) => {
      if (
        element.homeTeam.name === "Tottenham Hotspur FC" ||
        element.awayTeam.name === "Tottenham Hotspur FC"
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

    let matchRes = await axios.get("http://localhost:4040/api/home");
    console.log(matchRes.data);
    this.setState({ matchData: matchRes.data.teams });

    let awayImg = "";
    let homeImg = "";

    this.state.matchData.forEach((element) => {
      if (element.name === this.state.away) {
        awayImg = element.crestUrl;
      }
      if (element.name === this.state.home) {
        homeImg = element.crestUrl;
      }
    });

    this.setState({ matchImg: { away: awayImg, home: homeImg } });
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
          <img
            className="teamIcon"
            src={this.state.matchImg.away}
            alt={this.state.away}
          />{" "}
          {this.state.awayScore} - {this.state.homeScore}{" "}
          <img
            className="teamIcon"
            src={this.state.matchImg.home}
            alt={this.state.home}
          />
        </h4>
      </div>
    );
  }
}

export default Tottenham;
