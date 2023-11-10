const express = require('express') 
const app = express() 

app.use(express.json()) 

const arquivoJson = require('../dados.json') // arquivo json contendo os filmes

const nodemon = require('nodemon')

//rota raiz
app.get('/', (request, response) =>{
    return response.send('Desenvolvimento de uma Web API que fornece detalhes sobre os filmes em exibição nos cinemas.')
})

//Listagem de filmes em exibição nos cinemas
app.get('/filmes', (request, response) =>{
    return response.status(200).json(arquivoJson)
})

app.listen(3000, () => {
    console.log('A API está funcionando!')
})