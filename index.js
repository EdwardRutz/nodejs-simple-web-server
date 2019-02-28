"use strict";

//Import the Express library and instantiate the Express applicaton
const express = require('express');
const app = express();

//Define a route for the website
app.get("/", (req, res) => {
  res.send("This is a web page!");
})
