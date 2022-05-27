const database = require('../models') // require busca o index por padrão
const Services = require('../services/Services')
const NiveisServices = new Services('Niveis')

class NiveisController {
    static async insereNivel(req, res) {
        const novoNivel = req.body
        try {
            const response = await NiveisServices.insereRegistro(novoNivel)
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaNiveis(req, res) {
        try {
            const response = await NiveisServices.listaRegistros()
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaNivel(req, res) {
        const { id } = req.params
        try {
            const response = await NiveisServices.listaRegistro({id})
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaNivel(req, res) {
        const { id } = req.params
        const NivelAtualizado = req.body
        try {
            await NiveisServices.atualizaRegistro(NivelAtualizado, id)
            const resNivelAtualizado = await NiveisServices.findOne(id)
            return res.status(200).json(resNivelAtualizado)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaNivel(req, res) {
        const { id } = req.params
        try {
            await NiveisServices.deletaRegistro(id)
            return res.status(200).json('Nivel deletada com sucesso.')
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async restauraNivel(req, res) {
        const { id } = req.params
        
        try {
            await NiveisServices.restauraRegistro(id)

            return res.status(200).json(`Id ${id} restaurado.`)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = NiveisController