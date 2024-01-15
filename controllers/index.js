
const fs = require("fs");

// Função para carregar o arquivo JSON


module.exports = function (app) {
  const loadJSON = () => {
    try {
      const data = fs.readFileSync(app.get("path_data"), "utf8");
      return JSON.parse(data);
    } catch (erro) {
      console.error("Erro ao carregar o arquivo JSON:", erro);
      return {};
    }
  };
  var index = function (req, res) {
    data = loadJSON();
    res.render("index", { "data": data });
  };

  app.get("/", index);
};
