
class skinsController {

    async loadJSON() {
        try {
            const data = fs.readFileSync(app.get("path_data"), "utf8");
            return JSON.parse(data);
        } catch (erro) {
            console.error("Erro ao carregar o arquivo JSON:", erro);
            return {};
        }
    }
    // Método para lidar com solicitações GET
    async SkinView(req, res) {
        // Implemente a lógica para obter skins aqui
        // res.send('Obter skins');
        data = loadJSON();
        res.render("skins_view", {"data":data});
    }

    // Método para lidar com solicitações POST
    async createSkin(req, res) {
        // Implemente a lógica para criar uma nova skin aqui
        res.send('Criar skin');
    }

    // Método para lidar com solicitações PUT
    async updateSkin(req, res) {
        // Implemente a lógica para atualizar uma skin aqui
        res.send('Atualizar skin');
    }

    // Método para lidar com solicitações DELETE
    async deleteSkin(req, res) {
        // Implemente a lógica para deletar uma skin aqui
        res.send('Deletar skin');
    }
}

module.exports = new skinsController();