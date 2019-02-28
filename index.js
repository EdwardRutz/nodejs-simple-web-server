"use strict";

//Import the Express library and instantiate the Express applicaton
const express = require('express');
const path = require('path');

const app = express();

//Serve static files from public directory
const staticFilesPath = path.join("public");  //Contains static files to server
const staticFilesMiddleWare = express.static(staticFilesPath); //Instantiate Express static files middleware
app.use("/", staticFilesMiddleWare);  //Sets website root to the public directory


  //Replaced static message code below with serving static files in the public directory
  //Serve a static message, Define a route for the website
  // app.get("/", (req, res) => {
  //   res.send("This is a web page!");
  // });

//Start web server, listen to html requests
app.listen(3000, () => {
  console.log("Web server listening on port 3000!");
});

