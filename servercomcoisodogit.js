import express from 'express'
import cors from 'cors'

const servidor = express()
servidor.use(express.json());
servidor.use(cors())
servidor.get('/', (req, res) => {
    res.send('ta funcionando se pa')
})
// Marcos esteve ayqu

servidor.post('/steam', (req, res) => {
    steam.push(req.body)
    res.send('jogo foi cadastrado com sucesso!')
})

const steam = []
servidor.get('/steam', (req, res) => {
    res.send(steam)
})

servidor.post('/serie', (req, res) => {
    serie.push(req.body)
    res.send('serie cadastrado!')
})

const serie = []
servidor.get('/serie', (req, res) => {
    res.send(serie)
})



servidor.listen(3067, () => {
    console.log('deu bom!');
    
})
