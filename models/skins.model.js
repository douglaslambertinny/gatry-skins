const mongoose = require("mongoose");
const { Schema } = mongoose;

const skinSchema = new Schema({
  name: String,
  price: Number,
  image: String,
  link: String,
  createdAt: { type: Date, default: Date.now },
  float: String,
  type: String,
  collection: String,
  exterior: String,
  rarity: String,
  stattrak: Boolean,
  souvenir: Boolean,
  quality: String,
  color: String,
  discount: Number,
  weapon: String,
});

// Export the model
module.exports = mongoose.model("Skin", skinSchema);
