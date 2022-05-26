const TurmasController = require('../controller/TurmasController')
const { Router } = require('express')

const router = Router()

router.get('/turmas', TurmasController.listaTurmas)
router.get('/turmas/:id', TurmasController.listaTurma)
router.post('/turmas', TurmasController.insereTurma)
router.put('/turmas/:id', TurmasController.atualizaTurma)
router.delete('/turmas/:id', TurmasController.deletaTurma)
router.post('/turmas/:id/restaura', TurmasController.restauraTurma)

module.exports = router