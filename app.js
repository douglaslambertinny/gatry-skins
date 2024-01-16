const express = require("express");
const app = express();
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(
    "mongodb://127.0.0.1:27017/gatry-skins-app"
  );
    console.log("Conectado ao MongoDB");
  }

// all environments
app.use(express.urlencoded({ extended: true }));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); 
app.set('port', process.env.PORT || 3000);
app.set('path_data', __dirname + "/public/load_data.json");


// routing
require('./controllers/index.controller.js')(app);

const port = app.get("port");

main().catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
