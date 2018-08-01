const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  image: {
    data: Buffer,
    contentType:String 
    }
});

const Image = mongoose.model("Image", recipeSchema);

module.exports = Image;
