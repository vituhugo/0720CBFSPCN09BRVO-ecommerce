var express = require('express');
var router = express.Router();

ContatoController = require('../controllers/ContatoController');
ProdutoController = require('../controllers/ProdutoController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
  });
router.get('/carrinho', function(req, res, next) {
res.render('carrinho');
});

router.get('/contato', ContatoController.index);

router.get('/formulario', (req, res) => res.render('formulario'));

router.post('/contato/send', ContatoController.send)

router.get('/produto/:id', ProdutoController.index)

module.exports = router;
