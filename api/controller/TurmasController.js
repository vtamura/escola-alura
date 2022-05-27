const database = require('../models') // require busca o index por padrão
const { Sequelize } = require('../models')
const Services = require('../services/Services')
const Op = Sequelize.Op
const turmasServices = new Services('Turmas')

class TurmasController {
    static async insereTurma(req, res) {
        const novaPessoa = req.body
        try {
            const response = await turmasServices.insereRegistro(novaPessoa)
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaTurmas(req, res) {
        const { data_inicial, data_final } = req.query
        const where = {}

        data_inicial || data_final ? where.data_inicio = {} : null
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null
        data_final ? where.data_inicio[Op.lte] = data_final : null

        try {
            const response = await turmasServices.listaRegistros(where)
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaTurma(req, res) {
        const { id } = req.params
        try {
            const response = await turmasServices.listaRegistro({ id })
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTurma(req, res) {
        const { id } = req.params
        const TurmaAtualizada = req.body
        try {
            await turmasServices.atualizaRegistro(TurmaAtualizada, id)
            const resTurmaAtualizada = await turmasServices.listaRegistro(id)
            return res.status(200).json(resTurmaAtualizada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaTurma(req, res) {
        const { id } = req.params
        try {
            await turmasServices.deletaRegistro(id)
            return res.status(200).json('Turma deletada com sucesso.')
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async restauraTurma(req, res) {
        const { id } = req.params
        
        try {
            await turmasServices.restauraRegistro(id)

            return res.status(200).json(`Id ${id} restaurado.`)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = TurmasController