import React, { Component } from "react";
import axios from "axios";

class Score extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  getScore() {
    axios.get("http://localhost:4040/api/match").then((res) => {
      this.setState({ data: res.data.matches });
    });
  }

  componentDidMount() {
    this.getScore();
  }

  render() {
    let matches = this.state.data.map((d) => (
      <li key={d.id} className="matchItem">
        <h4 className="allAwayAndHome">
          {d.awayTeam.name} (away) vs. (home) {d.homeTeam.name}
        </h4>
        <h4 className="allScores">
          {d.score.fullTime.awayTeam} - {d.score.fullTime.homeTeam}
        </h4>
      </li>
    ));
    return (
      <div className="recentScores">
        <h1 className="scoreTitle">Recent Scores</h1>
        <ul className="matchList">{matches}</ul>
      </div>
    );
  }
}

export default Score;
