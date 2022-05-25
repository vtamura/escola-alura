const database = require('../models') // require busca o index por padrão

class TurmasController {
    static async insereTurma(req, res) {
        const novaPessoa = req.body
        try {
            const response = await database.Turmas.create(novaPessoa)
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaTurmas(req, res) {
        try {
            const response = await database.Turmas.findAll()
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaTurma(req, res) {
        const { id } = req.params
        try {
            const response = await database.Turmas.findOne(
                {
                    where: {
                        id: Number(id)
                    }
                })
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTurma(req, res) {
        const { id } = req.params
        const TurmaAtualizada = req.body
        try {
            await database.Turmas.update(TurmaAtualizada,
                {
                    where: {
                        id: Number(id)
                    }
                })
            const resTurmaAtualizada = await database.Turmas.findOne({
                where: {
                    id: id
                }
            })
            return res.status(200).json(resTurmaAtualizada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaTurma(req, res) {
        const { id } = req.params
        try {
            await database.Turmas.destroy(
                {
                    where: {
                        id: Number(id)
                    }
                })
            return res.status(200).json('Turma deletada com sucesso.')
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = TurmasController