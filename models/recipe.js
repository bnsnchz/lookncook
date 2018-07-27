const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  dishname: {
    type: String,
    required: true,
    unique: true
  },
  cooktime: {
    type: String,
    required: false
  },
  keywords: {
    type: Array,
    required: false
  },
  ingredients: {
    type: Array,
    required: true
  },
  instructions: {
      type: Array,
      required: true,
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
