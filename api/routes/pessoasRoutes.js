const PessoaController = require('../controller/PessoaController')
const { Router } = require('express')

const router = Router()

router.get('/pessoas', PessoaController.listaPessoas)
router.get('/pessoas/:id', PessoaController.listaPessoa)
router.post('/pessoas', PessoaController.inserePessoa)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.deletaPessoa)


router.get('/pessoas/:estudanteId/matricula', PessoaController.listaMatriculas)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.listaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.insereMatricula)
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula)



module.exports = router