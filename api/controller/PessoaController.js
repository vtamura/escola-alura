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
            await database.Pessoas.update(pessoaAtualizada,
                {
                    where: {
                        id: Number(id)
                    }
                })
            const resPessoaAtualizada = await database.Pessoas.findOne({
                where: {
                    id: id
                }
            })
            return res.status(200).json(resPessoaAtualizada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaPessoa(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.destroy(
                {
                    where: {
                        id: Number(id)
                    }
                })
            return res.status(200).json(`Id ${id} deletado com sucesso.`)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async restauraPessoa(req, res) {
        const { id } = req.params
        
        try {
            await database.Pessoas.restore({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json(`Id ${id} restaurado.`)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async restauraMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        
        try {
            await database.Matriculas.restore({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })

            return res.status(200).json(`Id ${matriculaId} restaurado.`)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaMatriculas(req, res) {
        const { estudanteId } = req.params

        try {
            const pessoa = await database.Pessoas.findOne({
                where: {
                    id: estudanteId
                }
            })
            const matriculas = await pessoa.getAulasMatriculadas()
            return res.status(200).json(matriculas)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            const response = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId) 
                }
            })
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async insereMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body,  estudante_id: estudanteId}
        try {
            const response = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const MatriculaAtualizada = req.body
        try {
            await database.Matriculas.update(MatriculaAtualizada,
                {
                    where: {
                        id: Number(matriculaId),
                        estudante_id: Number(estudanteId)
                    }
                })
            const resMatriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json(resMatriculaAtualizada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            await database.Matriculas.destroy(
                {
                    where: {
                        id: Number(matriculaId),
                        estudante_id: Number(estudanteId)
                    }
                })

            return res.status(200).json(`Matricula ${matriculaId} do aluno ${estudanteId} deletada com sucesso.`)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PessoaController