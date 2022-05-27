// requiring mongoose
const mongoose = require("mongoose");
// variable for schema
const Schema = mongoose.Schema;

// making our schema
const CampgroundSchema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
});
module.exports = mongoose.model("Campground", CampgroundSchema);
