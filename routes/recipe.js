const router = require("express").Router();
const Recipe = require('../models/recipe.js')

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

router.get('/api/recipes', function(req,res) {
  console.log(req.body)
  Recipe.find()
  .then(response => {
    res.json(response)
  })
  .catch(error => {
    console.log(error)
  });
});
module.exports = router;
