import express from 'express'
import bodyParser from 'body-parser'

const port = 3000
const app = express()

app.use(bodyParser.json())

app.get('/teste', (req, res) => {
    res
    .status(200)
    .send({message: 'Boas vindas à API'})
})

app.listen(port, () => {
    console.log(`Servidor rodando em localhost:${port}`)
})

export default app