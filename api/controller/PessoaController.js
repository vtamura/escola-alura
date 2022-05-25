const database = require('../models') // require busca o index por padrão

class PessoaController {
    static async inserePessoa(req, res) {
        const novaPessoa = req.body
        try {
            const response = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaPessoas(req, res) {
        try {
            const response = await database.Pessoas.findAll()
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaPessoa(req, res) {
        const { id } = req.params
        try {
            const response = await database.Pessoas.findOne(
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

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const pessoaAtualizada = req.body
        try {
            const response = await database.Pessoas.update(pessoaAtualizada,
                {
                    where: {
                        id: Number(id)
                    }
                })
            return res.status(200).send('Pessoa atualizada com sucesso.')
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaPessoa(req, res) {
        const { id } = req.params
        try {
            const response = await database.Pessoas.delete(
                {
                    where: {
                        id: Number(id)
                    }
                })
            return res.status(200).json('Pessoa deletada com sucesso.')
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PessoaController