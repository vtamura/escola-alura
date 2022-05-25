const bodyParser = require('body-parser')
const pessoasRoutes = require('./pessoasRoutes')

module.exports = app => {
    app.use(bodyParser.json()) // express.json()
    app.use(pessoasRoutes)

    app.get('/', (req, res) => {
        res
        .status(200)
        .send({message: 'Boas vindas à API'})
    })
}