const express = require('express') 
const app = express() 

app.use(express.json()) 

const arquivoJson = require('../dados.json') // arquivo json contendo os filmes

const nodemon = require('nodemon')

//função buscar filme por id
function buscaFilmePorId(id){
    return arquivoJson.filter(filme => filme.id == id)
}

//Essa função retorna o índice(posição) do objeto por id
function buscaIndiceFilme(id){
    return arquivoJson.findIndex(filme => filme.id == id)
}

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

//Permite que os administradores atualizem informações sobre um filme existente no catálogo
app.put('/filmes/:id', (request, response) => {
    const indice = buscaIndiceFilme(request.params.id)
    arquivoJson[indice].titulo = request.body.titulo
    arquivoJson[indice].genero = request.body.genero
    arquivoJson[indice].duracao = request.body.duracao
    arquivoJson[indice].direcao = request.body.direcao
    arquivoJson[indice].elenco = request.body.elenco
    arquivoJson[indice].sinopse = request.body.sinopse
    arquivoJson[indice].classificação = request.body.classificação
    arquivoJson[indice].sessoes = request.body.sessoes
    arquivoJson[indice].avaliação = request.body.avaliação
    arquivoJson[indice].comentarios = request.body.comentarios
    return response.send('Filme atualizado com sucesso!')
}) 

//Permite que os usuários atribuam uma avaliação (como uma pontuação de 1 a 5 estrelas) a um filme específico.
app.post('/filmes/:id/avaliacao', (request, response) => {
    const filmeId = parseInt(request.params.id);
    const avaliacao = request.body.avaliacao;
  
    // Encontra o filme pelo Id
    const filme = arquivoJson.find(filme => filme.id === filmeId);
    
    //Se não encontrar o Id retorna mensagem de erro
    if (!filme) {
      return response.status(404).send('Filme não encontrado.');
    }
  
    // Adiciona a avaliação ao filme
    filme.avaliacoes.push(avaliacao);
  
    return response.status(201).send('Avaliação adicionada com sucesso.');
  });


//Permite que os usuários publiquem um comentário sobre um filme específico.
app.post('/filmes/:id/comentario', (request, response) => {
    const filmeId = parseInt(request.params.id);
    const comentario = request.body.comentario;
  
    // Encontra o filme pelo Id
    const filme = arquivoJson.find(filme => filme.id === filmeId);
    
    //Se não encontrar o Id retorna mensagem de erro
    if (!filme) {
      return response.status(404).send('Filme não encontrado.');
    }
     // Adiciona a avaliação ao filme
     filme.avaliacoes.push(avaliacao);
  
     return response.status(201).send('Avaliação adicionada com sucesso.');
   });