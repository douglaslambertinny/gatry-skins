import mongoose from "mongoose";
const { Schema } = mongoose;

const skin = new Schema({
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
