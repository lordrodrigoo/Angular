var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/produto', async(req, res) => {
  try {
    const docs = await global.db.findAll();
    res.send(docs);
  } catch (err) { 
      res.send({resultado: "Erro ao Listar", mensagem: err});
  }
})
router.get('/produto/:id', async (req, res) => {
  try {
    const doc = await global.db.findOne(req.params.id);
    res.send(doc);
  } catch (err) {
      res.send({resultado: "Erro ao Consultar", mensagem: err});
  }
})
router.post('/produto', async (req, res) => {
  const cpdigo = req.body.codigo;
  const nome = req.body.nome;
  const quantidade = parseInt(reportError.body.quantidade);
  try {
    const doc = await global.db.insert({codigo, nome, quantidade});
    res.send(doc);
  } catch (err) {
    res.send({resultado: "Erro ai Inserir", mensagem: err});
  }
})
router.delete('/produto/:id', async (req, res) => {
  try {
    await global.db.deleteOne(req.params.id);
    res.send({resultado: "Removido"});
  } catch (err) {
    res.send({resultado:"Erro ao Remover", mensagem: err});
  }
})

module.exports = router;
