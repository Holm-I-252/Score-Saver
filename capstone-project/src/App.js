import React, { Component } from "react";
import "./App.css";
import SignIn from "./components/signIn";
import Teams from "./components/Teams";
import Standings from "./components/Standings";
import Score from "./components/Score";
import Arsenal from "./components/teams/Arsenal";
import AstonVilla from "./components/teams/AstonVilla";
import Chelsea from "./components/teams/Chelsea";
import Everton from "./components/teams/Everton";
import Liverpool from "./components/teams/Liverpool";
import ManCity from "./components/teams/ManCity";
import ManUnited from "./components/teams/ManUnited";
import Newcastle from "./components/teams/Newcastle";
import Norwich from "./components/teams/Norwitch";
import Tottenham from "./components/teams/Tottenham";
import Wolverhampton from "./components/teams/Wolves";
import Burnley from "./components/teams/Burnley";
import Leicester from "./components/teams/Leicester";
import Southampton from "./components/teams/Southampton";
import Leeds from "./components/teams/Leeds";
import Watford from "./components/teams/Watford";
import CrystalPalace from "./components/teams/CrystalPalace";
import Brighton from "./components/teams/Brighton";
import Brentford from "./components/teams/Brentford";
import WestHam from "./components/teams/WestHam";

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "Home",
      user: "",
      userTeam: "",
      matchDay: 10,
      teamIds: {
        "Arsenal FC": 57,
        "Aston Villa FC": 58,
        "Chelsea FC": 61,
        "Everton FC": 62,
        "Liverpool FC": 64,
        "Manchester City FC": 65,
        "Manchester United FC": 66,
        "Newcastle United FC": 67,
        "Norwich City FC": 68,
        "Tottenham Hotspur FC": 73,
        "Wolverhampton Wanderers FC": 76,
        "Burnley FC": 328,
        "Leicester City FC": 338,
        "Southampton FC": 340,
        "Leeds United FC": 341,
        "Watford FC": 346,
        "Crystal Palace FC": 354,
        "Brighton & Hove Albion FC": 397,
        "Brentford FC": 402,
        "West Ham United FC": 563,
      },
    };
    this.handler = this.handler.bind(this);
  }

  handler(value) {
    this.setState({ display: value });
  }

  render() {
    return (
      <div className="App">
        <div id="headder">
          <div className="nav">
            <h4
              className="homeBtn"
              onClick={() => {
                this.setState({ display: "" });
              }}
            >
              Home
            </h4>
          </div>
          <h4 className="title">Score Saver</h4>
          <div className="account">
            <h4 className="userName">Welcome {this.state.user}!</h4>
            <button
              className="signInBtn"
              onClick={() => {
                this.setState({ display: "Log In" });
              }}
            >
              Log In
            </button>
          </div>
        </div>
        <h1 className="currentPage">{this.state.display}</h1>
        <div id="mainPage">
          {(() => {
            switch (this.state.display) {
              case "Arsenal":
                return <Arsenal ids={this.state.teamIds} />;
              case "Aston Villa":
                return <AstonVilla ids={this.state.teamIds} />;
              case "Chelsea":
                return <Chelsea ids={this.state.teamIds} />;
              case "Everton":
                return <Everton ids={this.state.teamIds} />;
              case "Liverpool":
                return <Liverpool ids={this.state.teamIds} />;
              case "Man City":
                return <ManCity ids={this.state.teamIds} />;
              case "Man United":
                return <ManUnited ids={this.state.teamIds} />;
              case "Newcastle":
                return <Newcastle ids={this.state.teamIds} />;
              case "Norwich":
                return <Norwich ids={this.state.teamIds} />;
              case "Tottenham":
                return <Tottenham ids={this.state.teamIds} />;
              case "Wolverhampton":
                return <Wolverhampton ids={this.state.teamIds} />;
              case "Burnley":
                return <Burnley ids={this.state.teamIds} />;
              case "Leicester City":
                return <Leicester ids={this.state.teamIds} />;
              case "Southampton":
                return <Southampton ids={this.state.teamIds} />;
              case "Leeds United":
                return <Leeds ids={this.state.teamIds} />;
              case "Watford":
                return <Watford ids={this.state.teamIds} />;
              case "Crystal Palace":
                return <CrystalPalace ids={this.state.teamIds} />;
              case "Brighton Hove":
                return <Brighton ids={this.state.teamIds} />;
              case "Brentford":
                return <Brentford ids={this.state.teamIds} />;
              case "West Ham":
                return <WestHam ids={this.state.teamIds} />;
              case "Log In":
                return (
                  <SignIn
                    setStateUser={(p) => {
                      this.setState({ user: p });
                    }}
                    setStateDisplay={(p) => {
                      this.setState({ display: p });
                    }}
                    setStateUserTeam={(p) => {
                      this.setState({ userTeam: p });
                    }}
                  />
                );
              default:
                return (
                  <div id="contentArea">
                    <Teams
                      setState={(p) => {
                        this.setState({ display: p });
                        console.log(p);
                      }}
                    />
                    {(() => {
                      switch (this.state.userTeam) {
                        case "Arsenal":
                          return <Arsenal ids={this.state.teamIds} />;
                        case "Aston Villa":
                          return <AstonVilla ids={this.state.teamIds} />;
                        case "Chelsea":
                          return <Chelsea ids={this.state.teamIds} />;
                        case "Everton":
                          return <Everton ids={this.state.teamIds} />;
                        case "Liverpool":
                          return <Liverpool ids={this.state.teamIds} />;
                        case "Man City":
                          return <ManCity ids={this.state.teamIds} />;
                        case "Man United":
                          return <ManUnited ids={this.state.teamIds} />;
                        case "Newcastle":
                          return <Newcastle ids={this.state.teamIds} />;
                        case "Norwich":
                          return <Norwich ids={this.state.teamIds} />;
                        case "Tottenham":
                          return <Tottenham ids={this.state.teamIds} />;
                        case "Wolverhampton":
                          return <Wolverhampton ids={this.state.teamIds} />;
                        case "Burnley":
                          return <Burnley ids={this.state.teamIds} />;
                        case "Leicester City":
                          return <Leicester ids={this.state.teamIds} />;
                        case "Southampton":
                          return <Southampton ids={this.state.teamIds} />;
                        case "Leeds United":
                          return <Leeds ids={this.state.teamIds} />;
                        case "Watford":
                          return <Watford ids={this.state.teamIds} />;
                        case "Crystal Palace":
                          return <CrystalPalace ids={this.state.teamIds} />;
                        case "Brighton Hove":
                          return <Brighton ids={this.state.teamIds} />;
                        case "Brentford":
                          return <Brentford ids={this.state.teamIds} />;
                        case "West Ham":
                          return <WestHam ids={this.state.teamIds} />;
                        default:
                          return <Score ids={this.state.teamIds} />;
                      }
                    })()}

                    <Standings />
                  </div>
                );
            }
          })()}
        </div>
      </div>
    );
  }
}

export default App;
