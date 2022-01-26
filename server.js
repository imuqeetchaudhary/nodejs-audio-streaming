// NPM Modules Dependencies

const express = require("express");
const trackRouter = require("./src/routes/tracks");

// Create Express App & Express Router Configurations

const app = express();
app.use("/tracks", trackRouter);

// Server Setup

app.listen(8000, () => {
  console.clear();
  console.log("App started listening on http://localhost:8000");
});
