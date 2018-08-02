const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  token: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  savedRecipes : [{
      type: Schema.Types.ObjectId,
      ref: "Recipe"
      
  }]
});


const User = mongoose.model("User", userSchema);

module.exports = User;
