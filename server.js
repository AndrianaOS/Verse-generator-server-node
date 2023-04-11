const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3005;

app.use(cors());

// FILE PATHS
const identity = require("./verses/identity.json");
const covenant = require("./verses/covenant.json");
const deliverance = require("./verses/deliverance.json");
const governance = require("./verses/governance.json");
const transformation = require("./verses/transformation.json");
const help = require("./verses/help.json");
const blessings = require("./verses/blessings.json");
const salvation = require("./verses/salvation.json");
const ministry = require("./verses/ministry.json");
const healing = require("./verses/healing.json");
const discipline = require("./verses/discipline.json");
const purpose = require("./verses/purpose.json");
const standards = require("./verses/standards.json");
const repentance = require("./verses/repentance.json");
const boundaries = require("./verses/boundaries.json");
const promises = require("./verses/promises.json");
const grace = require("./verses/grace.json");
const freedom = require("./verses/freedom.json");
const marriage = require("./verses/marriage.json");
const fellowship = require("./verses/fellowship.json");
const leadership = require("./verses/leadership.json");

app.get("/", function (request, response) {
  response.send("Welcome to my Bible verse server");
});

// IDENTITY FUNCTIONS
app.get("/identity", function (request, response) {
  response.json(identity);
});

app.get("/identity/random", function (request, response) {
  response.json(pickFromArray(identity));
});

// COVENANT FUNCTIONS
app.get("/covenant", function (request, response) {
  response.json(covenant);
});

app.get("/covenant/random", function (request, response) {
  response.json(pickFromArray(covenant));
});

// DELIVERANCE FUNCTIONS
app.get("/deliverance", function (request, response) {
  response.json(deliverance);
});

// GOVERNANCE FUNCTIONS
app.get("/governance", function (request, response) {
  response.json(governance);
});

app.get("/governance/random", function (request, response) {
  response.json(pickFromArray(governance));
});

// TRANSFORMATION FUNCTIONS
app.get("/transformation", function (request, response) {
  response.json(transformation);
});

// HELP FUNCTIONS
app.get("/help", function (request, response) {
  response.json(help);
});

app.get("/help/random", function (request, response) {
  response.json(pickFromArray(help));
});

// BLESSINGS FUNCTIONS
app.get("/blessings", function (request, response) {
  response.json(blessings);
});

app.get("/blessings/random", function (request, response) {
  response.json(pickFromArray(blessings));
});

// SALVATION FUNCTIONS
app.get("/salvation", function (request, response) {
  response.json(salvation);
});

app.get("/salvation/random", function (request, response) {
  response.json(pickFromArray(salvation));
});

// MINISTRY FUNCTIONS
app.get("/ministry", function (request, response) {
  response.json(ministry);
});

app.get("/ministry/random", function (request, response) {
  response.json(pickFromArray(ministry));
});

// HEALING FUNCTIONS
app.get("/healing", function (request, response) {
  response.json(healing);
});

app.get("/healing/random", function (request, response) {
  response.json(pickFromArray(healing));
});

// DISCIPLINE FUNCTIONS
app.get("/discipline", function (request, response) {
  response.json(discipline);
});

app.get("/discipline/random", function (request, response) {
  response.json(pickFromArray(discipline));
});

// PURPOSE FUNCTIONS
app.get("/purpose", function (request, response) {
  response.json(purpose);
});

app.get("/purpose/random", function (request, response) {
  response.json(pickFromArray(purpose));
});

// STANDARDS FUNCTIONS
app.get("/standards", function (request, response) {
  response.json(standards);
});

app.get("/standards/random", function (request, response) {
  response.json(pickFromArray(standards));
});

// REPENTANCE FUNCTIONS
app.get("/repentance", function (request, response) {
  response.json(repentance);
});

app.get("/repentance/random", function (request, response) {
  response.json(pickFromArray(repentance));
});

// BOUNDARIES FUNCTIONS
app.get("/boundaries", function (request, response) {
  response.json(boundaries);
});

app.get("/boundaries/random", function (request, response) {
  response.json(pickFromArray(boundaries));
});

// PROMISES FUNCTIONS

// GRACE FUNCTIONS

// FREEDOM FUNCTIONS

// MARRIAGE FUNCTIONS

// FELLOWSHIP FUNCTIONS

// LEADERSHIP FUNCTIONS

// DELIVERANCE FUNCTIONS

// DELIVERANCE FUNCTIONS

// DELIVERANCE FUNCTIONS

// DELIVERANCE FUNCTIONS

// DELIVERANCE FUNCTIONS

// DELIVERANCE FUNCTIONS

// DELIVERANCE FUNCTIONS

// DELIVERANCE FUNCTIONS

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
