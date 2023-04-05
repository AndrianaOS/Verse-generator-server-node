const express = require("express");
const app = express();

const PORT = 3005;

const identity = require("./identity.json");

app.get("/", function (request, response) {
  response.send("Welcome to my Bible verse server");
});

app.get("/identity", function (request, response) {
  response.json(identity);
});

app.get("/identity/random", function (request, response) {
  response.json(pickFromArray(identity));
});

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
