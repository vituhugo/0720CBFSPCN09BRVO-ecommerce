const ContatoController = {

    index(req, res) {
        return res.render('contato');
    },

    send (req, res) {
        return res.send({message: "Mensagem enviada com sucesso!", type: "success"})
    },

}

module.exports = ContatoController;