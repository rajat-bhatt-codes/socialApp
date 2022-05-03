const express = require("express");
const format = require("date-format");

const app = express();

const PORT = 4000 || process.env.port;

app.get("/", (req, res) => {
  res.status(201).send("<h1> Hello from LCO </h1>");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "Rajatbhattofficail",
    followers: 66,
    follows: 220,
    date: format.asString("dd[MM] hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const instaSocial = {
    username: "rajatbhattfb",
    followers: 866,
    follows: 20,
    date: format.asString("dd[MM] hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const instaSocial = {
    username: "rajatcodes",
    followers: 610,
    follows: 99,
    date: format.asString("dd[MM] hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
