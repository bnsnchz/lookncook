const router = require("express").Router();
const Recipe = require('../models/recipe.js');
const User = require('../models/user.js');
const encrypt = require('../encryption.js');

router.post('/api/recipes',  function(req,res) {
  console.log(req.body);
  Recipe.create({
    dishname: req.body.title,
    cooktime: req.body.cooktime,
    keywords: req.body.keywords,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions
  })
  .then(response => {
    res.json(response);
  })
  .catch(error => {
    res.json(error);
  });
});


router.post('/api/search', function(req,res) {
  console.log(req.body.search);
  
  Recipe.find(
    {keywords:{$in:req.body.search}}
  )
  .then(response => {
    res.json(response);
  })
  .catch(error => {
    res.json(error);
  })
})

router.get('/api/recipes', function(req,res) {
  Recipe.find()
  .then(response => {
    res.json(response)
  })
  .catch(error => {
    console.log(error)
  });
});

router.post("/recipe/:id", function(req, res) {
  Recipe.find({_id: req.params.id})
  .then(response => {
      res.json(response)
    // res.redirect(`/recipe/${req.params.id}`, response)
  })
  .catch(error => {
    console.log(error)
  });
});

router.get("/recipe/:id", function(req, res){
  Recipe.find({ _id: req.params.id })
  .then(response =>{
    // console.log(response[0])
    res.send(response)
    console.log(response[0])
    // (`/recipe/${req.params.id}`, response)
  })
  .catch(error => {
    console.log(error)
  });
});


var loggedIn = false;

router.get('/auth', function(req,res) {
  console.log(req.session)
  if (req.session.user){
    loggedIn=true
    res.json(loggedIn)
  } else {
    loggedIn = false;
    res.json(loggedIn)
  }
})

router.get("/logout", function(req,res) {
  // console.log(req.session);
  req.session.destroy()
  req.session = null;
  // console.log(req.session)
  res.send("Session ended.");
  
})

router.post('/signin', function(req,res) {
  User.find({
    username: req.body.username,
  }).then(response => {
    if (response[0].username === req.body.username && encrypt.decrypt(response[0].password) === req.body.password) {
      loggedIn=true;
      var token = `t${Math.random()}`;
      response[0].token = token;
      res.cookie('token', token);
      req.session.user = response;
      User.update(
        {username:req.body.username},
        {$set:{token:token}},
      ).then(result => {
        res.json(loggedIn);
      }).catch(err => {
        res.json(err);
      })
    }

  }).catch(error => {
    res.json(error);
  })
})

router.post('/register', function(req,res) {
  User.findOne({
    username : req.body.username
  }).then(response => {
    if (response) {
      return res.send("Sorry, this username is already taken, please choose another.")
    } else {
      User.create({
        username : req.body.username,
        password: encrypt.encrypt(req.body.password),
        token: req.body.token
      }).then(response => {
        res.json(response);
      }).catch(error => {
        console.log(error);
      })
    }
  })
})
module.exports = router;


