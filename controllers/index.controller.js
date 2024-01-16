
const fs = require("fs");
const Skin = require("../models/skins.model");

//Funcao que retorna a lista de skins do banco de dados junto com o arquivo JSON
// const loadJSON = async () => {
//   try {
//     const data = fs.readFileSync(app.get("path_data"), "utf8");
//     const skins = await Skin.find();
//     return { "skins": JSON.parse(data), "db": skins };
//   } catch (erro) {
//     console.error("Erro ao carregar o arquivo JSON:", erro);
//     return {};
//   }
// };


// Função para carregar o arquivo JSON
module.exports = function (app) {
  const loadJSON = async () => {
    try {
      const data = fs.readFileSync(app.get("path_data"), "utf8");
      const skins = await Skin.find({});
      // Concatenar data e skins if tiver skins
      data = JSON.parse(data);
      if (skins.length > 0) {
        data.skins = skins;
      }
      return data;
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
