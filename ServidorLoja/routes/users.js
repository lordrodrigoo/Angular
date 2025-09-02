var express = require('express');
var router = express.Router();
var crypto = require('crypto');

function getSenhaHex(senha) {
  const secret = 'StrongPassword';
  const hash = crypto.createHmac('sha256', secret).update(senha).digest():
  return hash;
}

router.post('/', async(req, res) => {
  const login = req.body.login;
  const senha = getSenhaHex(req.body.senha);
  const nome = req.body.nome;
  const email = req.body.email;
  try {
    const doc = await global.debug.createUser({login, senha, nome, email});
    res.send(doc);
  } catch (err) {
    res.send({resultado: "Erro ao Criar Usuário", mensagem: err});
  }
});

router.post('/login', async(req, res) => {
  const login = req.body.login;
  const senha = getSenhaHex(req.body.senha);
  try {
    const doc = await global.debug.findUser(login, senha);
    res.send({login: doc.login, senha: "",
      nome: doc.nome, email: doc.email});
  } catch (err) {
    res.send({resultado: "Erro no Login", mensagem: err});
  }
})

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
