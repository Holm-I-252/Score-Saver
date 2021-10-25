const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*"); //Maybe work out another solution for this before hosting
  next();
});

let teams = [];
let standings = [];
let matches = [];

//api calls to get data

axios
  .get("https://api.football-data.org/v2/competitions/PL/teams", {
    headers: {
      "X-Auth-Token": "1ee93bfc0d79467fab303092daa35386",
    },
  })
  .then((res) => {
    teams = res.data;
  });

axios
  .get("https://api.football-data.org/v2/competitions/PL/standings", {
    headers: {
      "X-Auth-Token": "1ee93bfc0d79467fab303092daa35386",
    },
  })
  .then((res) => {
    standings = res.data;
  });

axios
  .get("https://api.football-data.org/v2/competitions/PL/matches/?matchday=9", {
    //Make sure to update match day every week, or fix with new solution
    headers: {
      "X-Auth-Token": "1ee93bfc0d79467fab303092daa35386",
    },
  })
  .then((res) => {
    matches = res.data;
  });

//endpoints for front end api calls

app.get("/api/home", (req, res) => {
  res.status(200).send(teams);
});

app.get("/api/standings", (req, res) => {
  res.status(200).send(standings);
});

app.get("/api/match", (req, res) => {
  res.status(200).send(matches);
});

app.listen(4040, () => console.log("Server running on 4040"));
