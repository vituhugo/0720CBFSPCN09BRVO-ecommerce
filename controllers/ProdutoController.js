const ProdutoController = {
    index(req, res) {
        let id = req.params.id;
        return res.render('produto', {id});
    }
}

module.exports = ProdutoController;