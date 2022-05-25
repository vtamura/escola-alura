const PessoaController = require('../controller/PessoaController')
const { Router } = require('express')

const router = Router()

router.get('/pessoas', PessoaController.listaPessoas)
router.get('/pessoas/:id', PessoaController.listaPessoa)
router.post('/pessoas', PessoaController.inserePessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.deletaPessoa)

router.get('/pessoas/:estudanteId/matricula', PessoaController.listaMatriculas)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.listaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.insereMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula)


module.exports = router