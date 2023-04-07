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
const blessing = require("./blessings.json");
const salvation = require("./salvation.json");
const ministry = require("./ministry.json");
const healing = require("./healing.json");
const discipline = require("./discipline.json");
const purpose = require("./purpose.json");
const standards = require("./standards.json");

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

// SALVATION FUNCTIONS

// MINISTRY FUNCTIONS

// HEALING FUNCTIONS

// DISCIPLINE FUNCTIONS

// PURPOSE FUNCTIONS

// STANDARDS FUNCTIONS

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
