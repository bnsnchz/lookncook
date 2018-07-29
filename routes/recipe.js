const router = require("express").Router();
const Recipe = require('../models/recipe.js');
const User = require('../models/user.js');
const encrypt = require('../encryption.js')

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



var loggedIn = false;

router.get('/auth', function(req,res) {
  res.json(loggedIn)
})
router.post('/login', function(req,res) {
  
  User.find({
    username: req.body.username,
  }).then(response => {
    if (response.username === req.body.username && encrypt.decrypt(response.password) === req.body.password) {
      console.log('true');
      loggedIn=true;
    }
    res.json(loggedIn);
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
