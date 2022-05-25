const NiveisController = require('../controller/NiveisController')
const { Router } = require('express')

const router = Router()

router.get('/niveis', NiveisController.listaNiveis)
router.get('/niveis/:id', NiveisController.listaNivel)
router.post('/niveis', NiveisController.insereNivel)
router.put('/niveis/:id', NiveisController.atualizaNivel)
router.delete('/niveis/:id', NiveisController.deletaNivel)

module.exports = router