const router = require("express").Router();
const Recipe = require('../models/recipe.js');
const User = require('../models/user.js');
const Image = require('../models/image.js');
const encrypt = require('../encryption.js');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
var loggedIn = false;

router.post('/api/recipes', upload.single('image'), function(req,res) {
  console.log(req.body);
  Image.create({
    image:req.body.preview
  }).then(result => {
    console.log(result);
    Recipe.create({
      dishname: req.body.title,
      cooktime: req.body.cooktime,
      keywords: req.body.keywords,
      image: req.body.image,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      createdBy: req.session.user[0]._id,
      image: result._id
    })
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.json(error);
    });
  }).catch(err => {
    res.json(err);
  });
 
});


router.post('/api/search', function(req,res) {
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

router.post('/api/saverecipe', function(req,res) {
  User.update(
    {_id:req.session.user[0]._id},
    {$push:{savedRecipes:req.body.id}}
  ).then(response => {
    res.json(response);
  }).catch(error => {
    res.json(error);
  })
})

router.get('/api/recipes', function(req,res) {
  Recipe.find()
  .then(response => {
    res.json(response)
  })
  .catch(error => {
    res.json(error)
  });
});

router.post("/search/:id", function(req, res) {
  Recipe.find({_id: req.params.id})
  .then(response => {
      res.json(response)
    res.redirect(`/recipe/${req.params.id}`, response)
  })
  .catch(error => {
    res.json(error)
  });
});

router.get("/recipe/:id", function(req, res){
  Recipe.find({ _id: req.params.id })
  .then(response =>{
    res.send(response)
  })
  .catch(error => {
    res.json(error)
  });
});



router.get('/auth', function(req,res) {
  if (req.session.user){
    loggedIn=true
    res.json(loggedIn)
  } else {
    loggedIn = false;
    res.json(loggedIn)
  }
})

router.get("/logout", function(req,res) {
  req.session.destroy()
  req.session = null;
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
    } else {
      loggedIn = false;
      res.json(loggedIn)
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
        res.json(error);
      })
    }
  })
})


router.get("/userInfo", function(req,res) {
  User.find(
    {username:req.session.user[0].username}
  ).populate('savedRecipes')
  .then(response => {
    res.send(response);
  }).catch(error => {
    res.json(error);
  })
})

router.get("/recipeInfo", function(req,res) {
  Recipe.find(
    {createdBy:req.session.user[0]._id}
  )
  .then(response => {
    res.send(response);
  }).catch(error => {
    res.json(error);
  })
})

router.post('/removesave', function(req,res) {
  User.update(
    {username:req.session.user[0].username},
    {$pull:{savedRecipes:req.body.id}}
  )
  .then(response => {
    User.find(
      {username:req.session.user[0].username}
    ).populate('savedRecipes')
    .then(result => {
      res.send(result);
    }).catch(error => {
      res.json(error);
    })
  })
  .catch(error => {
    res.json(error);
  })
})

module.exports = router;


