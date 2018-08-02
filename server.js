const express = require("express");
const session = require('express-session');
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/recipe.js");
const PORT = process.env.PORT || 3001;
const app = express();
const fileUpload = require("express-fileupload");

app.use(routes);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());

app.use(
  session({
    secret: "youCanLookButCanYouCook", 
    resave: false, 
    saveUninitialized: true, 
    cookie: {
      secure: "auto",
      maxAge: 1800000
    }
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/recipe_db",
  
);

app.get("*", (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
