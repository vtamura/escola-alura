const PessoaController = require('../controller/PessoaController')
const { Router } = require('express')

const router = Router()

router.get('/pessoas', PessoaController.listaPessoas)
router.get('/pessoas/:id', PessoaController.listaPessoa)
router.post('/pessoas', PessoaController.inserePessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.deletaPessoa)

module.exports = router