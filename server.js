const express = require("express");
const app = express();

const PORT = 3005;

// FILE PATHS
const identity = require("./identity.json");
const covenant = require("./covenant.json");
const deliverance = require("./deliverance.json");
const governance = require("./governance.json");
const transformation = require("./transformation.json");
const help = require("./help.json");
const blessings = require("./blessings.json");
const salvation = require("./salvation.json");
const ministry = require("./ministry.json");
const healing = require("./healing.json");
const discipline = require("./discipline.json");
const purpose = require("./purpose.json");
const standards = require("./standards.json");
const repentance = require("./repentance.json");
const boundaries = require("./boundaries.json");

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
