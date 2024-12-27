const express = require("express");
const app = express();
const db = require("./db");

// all environments
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public")); 
app.set('port', process.env.PORT || 3100);

// Database connection and seeding
async function main() {
  await db.run();
}

// Routes
app.use("/", require("./routes/index.route"));


// Server setup
var port = app.get('port');
app.listen(port, () => {
  main().catch((err) => console.log(err));
  console.log(`Servidor rodando em http://localhost:${port}`);
});
