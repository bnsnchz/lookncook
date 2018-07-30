const express = require("express");
const session = require('express-session');
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/recipe.js");
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
// app.use(cookieParser());
app.use(
  session({
    secret: "whateverWeWant", 
    resave: false, 
    saveUninitialized: true, //
    cookie: {
      secure: "auto",
      maxAge: 9999999
    }
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/recipe_db",
  
);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
