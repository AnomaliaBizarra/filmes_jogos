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

servidor.post('/anime', (req, res) => {
    anime.push(req.body)
    res.send('anime cadastrado!')
})

const anime = []
servidor.get('/anime', (req, res) => {
    res.send(anime)
})



servidor.listen(3067, () => {
    console.log('deu bom!');
    
})
