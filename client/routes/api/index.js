const router = require("express").Router();
const recipeRoutes = require("./recipe");

console.log("recipe api routes included");
router.use("/recipe", recipeRoutes);

module.exports = router;
