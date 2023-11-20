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
  
    // Atribui o comentário ao filme
    filme.comentarios.push(comentario);
  
    return response.status(201).send('Comentário adicionado com sucesso.');
  });


//Visualizar comentários de usuários sobre um filme específico.
app.get('/filmes/:id/comentarios', (request, response) => {
    const filmeId = parseInt(request.params.id);

    // Encontra o filme pelo Id
    const filme = arquivoJson.find(filme => filme.id === filmeId);

    // Se o id não for encontrado, retorna mensagem de erro
    if (!filme) {
        return response.status(404).send('Filme não encontrado.');
    }

    // Se não houver comentários, retorna a mensagem
    if (filme.comentarios.length === 0) {
        return response.send('Ainda não há comentários.')
    }

    // Retorna todos os comentários do filme
    return response.status(200).json(filme.comentarios);

});

//Visualizar avaliações de usuários sobre um filme específico.
app.get('/filmes/:id/avaliacoes', (request, response) => {
    const filmeId = parseInt(request.params.id);

    // Encontra o filme pelo id
    const filme = arquivoJson.find(filme => filme.id === filmeId);

    // Se o id não for encontrado, retorna mensagem de erro
    if (!filme) {
        return response.status(404).send('Filme não encontrado.');
    }

    // Se não houver avaliações, retorna a mensagem
    if (filme.avaliacoes.length === 0) {
        return response.send('Ainda não há avaliações.')
    }

    // Retorna todas as avaliações do filme
    return response.status(200).json(filme.avaliacoes);

});

//Permite que os administradores removam filmes do catálogo.
app.post('/filmes/:id/delete', (request, response) => {
    const filmeId = parseInt(request.params.id);
    
    //Busca o índice(posição) do filme através do id
    const index = buscaIndiceFilme(filmeId);

    if (index !== -1) {
        // Remove o filme do catálogo
        arquivoJson.splice(index, 1);
        return response.status(200).send('Filme excluído com sucesso!');
    } else {
        return response.status(404).send('Filme não encontrado.');
    }
});

// Permite que os administradores atualizem informações sobre um filme existente no catálogo.
app.post('/filmes/:id', (request, response) => {
    const filmeId = request.params.id;
    
    const filmeIndex = arquivoJson.findIndex(filme => filme.id == filmeId);

    // Se o id não existe, envia mensagem de filme não encontrado
    if (filmeIndex === -1) {
        return response.status(404).send('Filme não encontrado.');
    }

    const filmeAtualizado = { ...arquivoJson[filmeIndex], ...request.body };
    arquivoJson[filmeIndex] = filmeAtualizado;

    return response.status(200).send('Filme atualizado com sucesso!');
});  

//Listagem de filmes em exibição nos cinemas
app.get('/filmes', (request, response) =>{
    return response.status(200).json(arquivoJson)
})

//buscar filme por id (Detalhes de um filme específico)
app.get('/filmes/:id', (request, response) => {
    return response.json(buscaFilmePorId(request.params.id))
})
app.listen(3000, () => {
    console.log('A API está funcionando!')
})