const database = require('../models/index')

class Services {
    constructor(nomeModelo) {
        this.nomeModelo = nomeModelo
    }
    
    async insereRegistro(data) {
        return database[this.nomeModelo].create(data)
    }

    async listaRegistros(where = {}) {
        return database[this.nomeModelo].findAll({ where: {...where} })
    }

    async listaRegistro(where = {}) {
        return database[this.nomeModelo].findOne({ where: {...where} })
    }

    async atualizaRegistro(data, id) {
        return database[this.nomeModelo].update(data, {
            where: {
                id: id
            }
        })
    }

    async deletaRegistro(id) {
        return database[this.nomeModelo].destroy({
            where: {
                id: id
            }
        })
    }

    async restauraRegistro(id) {
        return database[this.nomeModelo].restore({
            where: {
                id: id
            }
        })
    }
}

module.exports = Services