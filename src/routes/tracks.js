// NPM Modules Dependencies

const express = require("express");
const trackRouter = express.Router();

// Node.js Module Dependencies

const trackController = require("../controllers/tracks");

// GET /tracks/:trackId

trackRouter.get("/:trackId", trackController.getTrack);

// POST /tracks

trackRouter.post("/", trackController.postTrack);

// Module Exports

module.exports = trackRouter;
