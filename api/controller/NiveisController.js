const database = require('../models') // require busca o index por padrão

class NiveisController {
    static async insereNivel(req, res) {
        const novaNivel = req.body
        try {
            const response = await database.Niveis.create(novaNivel)
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaNiveis(req, res) {
        try {
            const response = await database.Niveis.findAll()
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaNivel(req, res) {
        const { id } = req.params
        try {
            const response = await database.Niveis.findOne(
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

    static async atualizaNivel(req, res) {
        const { id } = req.params
        const NivelAtualizada = req.body
        try {
            await database.Niveis.update(NivelAtualizada,
                {
                    where: {
                        id: Number(id)
                    }
                })
            const resNivelAtualizada = await database.Niveis.findOne({
                where: {
                    id: id
                }
            })
            return res.status(200).json(resNivelAtualizada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaNivel(req, res) {
        const { id } = req.params
        try {
            await database.Niveis.destroy(
                {
                    where: {
                        id: Number(id)
                    }
                })
            return res.status(200).json('Nivel deletada com sucesso.')
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = NiveisController