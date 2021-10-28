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
                return <Arsenal />;
              case "Aston Villa":
                return <AstonVilla />;
              case "Chelsea":
                return <Chelsea />;
              case "Everton":
                return <Everton />;
              case "Liverpool":
                return <Liverpool />;
              case "Man City":
                return <ManCity />;
              case "Man United":
                return <ManUnited />;
              case "Newcastle":
                return <Newcastle />;
              case "Norwich":
                return <Norwich />;
              case "Tottenham":
                return <Tottenham />;
              case "Wolverhampton":
                return <Wolverhampton />;
              case "Burnley":
                return <Burnley />;
              case "Leicester City":
                return <Leicester />;
              case "Southampton":
                return <Southampton />;
              case "Leeds United":
                return <Leeds />;
              case "Watford":
                return <Watford />;
              case "Crystal Palace":
                return <CrystalPalace />;
              case "Brighton Hove":
                return <Brighton />;
              case "Brentford":
                return <Brentford />;
              case "West Ham":
                return <WestHam />;
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
                    <Score />
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
