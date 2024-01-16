const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

function CreateUser(name, email, password) {
  return new User({
    name: name,
    email: email,
    password: password,
  });
}

if (User.find({}).length == 0) {
  const userAdmin = new CreateUser("Admin", "admin@example.com", "admin");
  userAdmin.save();
}

 module.exports = User
