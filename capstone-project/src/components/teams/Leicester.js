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
      matchData: [],
      matchImg: {},
      topPlayers: [],
      teamId: 338,
      showTeams: false,
      awayTeam: [],
      homeTeam: [],
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

    let scorers = await axios.get("http://localhost:4040/api/scorers");

    scorers.data.scorers.forEach((element) => {
      if (element.team.name === "Leicester City FC") {
        let name = element.player.name;
        let score = element.numberOfGoals;
        let position = element.player.position;
        this.setState({
          topPlayers: [...this.state.topPlayers, { name, score, position }],
        });
      }
    });
  }

  async getTeam() {
    let teamDataHome = await axios.get(
      `http://localhost:4040/api/getTeam/${this.props.ids[this.state.home]}`
    );
    let teamDataAway = await axios.get(
      `http://localhost:4040/api/getTeam/${this.props.ids[this.state.away]}`
    );
    console.log(teamDataHome.data);
    console.log(teamDataAway.data);

    this.setState({ awayTeam: teamDataAway.data.squad });
    this.setState({ homeTeam: teamDataHome.data.squad });

    this.setState({ showTeams: true });
  }

  componentDidMount() {
    this.getScore();
  }

  render() {
    let topScorers = this.state.topPlayers.map((d) => (
      <li className="playerItem">
        {d.name}: {d.score}
      </li>
    ));

    let awaySquad = this.state.awayTeam.map((d) => (
      <li className="awaySquadItem">
        {d.name}, {d.position}
      </li>
    ));

    let homeSquad = this.state.homeTeam.map((d) => (
      <li className="awaySquadItem">
        {d.name}, {d.position}
      </li>
    ));
    return (
      <div className="teamScores">
        <h3 className="matchTitle">Last Match</h3>
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
        {(() => {
          switch (this.state.showTeams) {
            case true:
              return (
                <div>
                  <div className="teamsSection">
                    <ul className="awayTeamList">{awaySquad}</ul>
                    <ul className="homeTeamList">{homeSquad}</ul>
                  </div>
                  <button
                    className="hideTeams"
                    onClick={() => this.setState({ showTeams: false })}
                  >
                    Hide Teams
                  </button>
                </div>
              );
            default:
              return (
                <button className="showTeams" onClick={() => this.getTeam()}>
                  Show Teams
                </button>
              );
          }
        })()}
        <h3>Top Scorers</h3>
        <ul className="scorerList">{topScorers}</ul>
      </div>
    );
  }
}

export default Leicester;
