const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { Client } = require("pg");

const app = express();

app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*"); //Maybe work out another solution for this before hosting
  next();
});

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Arsenal@25",
  database: "capstone",
});

const client2 = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Arsenal@25",
  database: "capstone",
});

client.connect();
client2.connect();

let rows = [];
let error = [];
let teams = [];
let standings = [];
let matches = [];
let scorers = [];
let fplData = [];

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
  .get(
    "https://api.football-data.org/v2/competitions/PL/matches/?matchday=10",
    {
      //Make sure to update match day every week, or fix with new solution
      headers: {
        "X-Auth-Token": "1ee93bfc0d79467fab303092daa35386",
      },
    }
  )
  .then((res) => {
    matches = res.data;
  });

axios
  .get("https://api.football-data.org/v2/competitions/PL/scorers/?limit=100", {
    headers: {
      "X-Auth-Token": "1ee93bfc0d79467fab303092daa35386",
    },
  })
  .then((res) => {
    scorers = res.data;
  });

axios
  .get("https://fantasy.premierleague.com/api/fixtures?event=10")
  .then((res) => {
    console.log(res.data);
    fplData = res.data;
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

app.get("/api/scorers", (req, res) => {
  res.status(200).send(scorers);
});

app.get("/api/fpl", (req, res) => {
  res.status(200).send(fplData);
});

app.get("/api/getTeam/:id", async (req, res) => {
  console.log(req.params.id);
  let data = await axios.get(
    `https://api.football-data.org/v2/teams/${req.params.id}`,
    {
      headers: {
        "X-Auth-Token": "1ee93bfc0d79467fab303092daa35386",
      },
    }
  );
  res.status(200).send(data.data);
});

//Database endpoints

app.get("/api/data", async (req, res) => {
  client.query(`SELECT * FROM users;`, (err, res) => {
    if (!err) {
      console.log(res.rows);
      rows = res.rows;
    } else {
      console.log(err.message);
      error = err.message;
    }
    client.end();
  });

  if (rows !== []) {
    res.status(200).send(rows);
  } else {
    res.status(400).send(error);
  }
});

app.post("/api/addData", async (req, res) => {
  console.log(
    `${req.body.name}, ${req.body.username}, ${req.body.password}, ${req.body.faveTeam}`
  );

  client2
    .query(
      `INSERT INTO users(name, username, password, fave_team) VALUES ($1, $2, $3, $4)`,
      [req.body.name, req.body.username, req.body.password, req.body.faveTeam]
    )
    .then(() => client2.query("SELECT * FROM users"))
    .then((results) => console.table(results.row))
    .catch((e) => console.log(e))
    .finally(() => client2.end());

  res.status(200).send(`User ${req.body.username} added!`);
});

app.listen(4040, () => console.log("Server running on 4040"));
