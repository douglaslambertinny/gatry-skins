const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/gatry-skins-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// all environments
app.use(express.urlencoded({ extended: true }));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); 
app.set('port', process.env.PORT || 3000);
app.set('path_data', __dirname + "/public/load_data.json");


// routing
require('./controllers/index.js')(app);

const port = app.get("port");

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
