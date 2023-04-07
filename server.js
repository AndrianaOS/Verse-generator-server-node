const express = require("express");
const app = express();

const PORT = 3005;

const identity = require("./identity.json");
const covenant = require("./covenant.json");
const deliverance = require("./deliverance.json");
const governance = require("./governance.json");
const transformation = require("./transformation.json");

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

// DELIVERANCE FUNCTIONS

// DELIVERANCE FUNCTIONS

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
