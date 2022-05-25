const bodyParser = require('body-parser')
const pessoasRoutes = require('./pessoasRoutes')
const niveisRoutes = require('./niveisRoutes')
const turmasRoutes = require('./turmasRoutes')


module.exports = app => {
    app.use(
        bodyParser.json(), // express.json()
        pessoasRoutes,
        niveisRoutes,
        turmasRoutes
    ) 

    app.get('/', (req, res) => {
        res
        .status(200)
        .send({message: 'Boas vindas à API'})
    })
}