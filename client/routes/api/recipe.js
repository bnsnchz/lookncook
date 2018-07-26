const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router.route("/")
  .get(recipeController.findAll)
  .post(recipeController.create);

router.route("/:id")
  .delete(recipeController.remove);

module.exports = router;
