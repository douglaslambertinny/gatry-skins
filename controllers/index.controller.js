
// Require
class indexController {
  index(req, res) {
    res.render("layout", {title: "Gatry Skins"})
  };
};

module.exports = new indexController();