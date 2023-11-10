
# API de Catálogo de Filmes

Este é um projeto de uma API simles para gerenciar um Catálogo de filmes. A API foi desenvolvida utilizando Node.js e o framework Express.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/camilabsp/api_express.git
   cd api_express

2. Instale as dependências:

    ```bash
    npm install

3. Execute o servidor:

    ```bash
    npm start

A API estará disponível em http://localhost:3000.
## Documentação da API

#### Retorna uma mensagem sobre o desenvolvimento da API.

```http://localhost:3000
  GET /
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um array JSON com informações sobre todos os filmes no catálogo.

```http://localhost:3000/filmes
  GET /filmes
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `api_key`      | `string` |Lista todos os filmes cadastrados|

#### Retorna detalhes de um filme específico com base no seu ID.

```http://localhost:3000/filmes/:id
  GET /filmes/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do item que você quer |

#### Permite que administradores adicionem novos filmes ao catálogo.

```http://localhost:3000/filmes
  POST /filmes
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. Dados do filme desejado|

#### Permite que administradores atualizem informações sobre um filme existente.

```http://localhost:3000/filmes/:id
  PUT /filmes/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do item que você quer |

#### Permite que usuários atribuam uma avaliação (1 a 5 estrelas) a um filme específico.

```http://localhost:3000/filmes/:id/avaliacao
  POST /filmes/:id/avaliacao
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do item que você quer |

#### Permite que usuários publiquem um comentário sobre um filme específico.

```http://localhost:3000/filmes/:id/comentario
  POST /filmes/:id/comentario
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do item que você quer |

#### Retorna todos os comentários de usuários sobre um filme específico.

```http://localhost:3000/filmes/:id/comentarios
  GET /filmes/:id/comentarios
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do item que você quer |

#### Retorna todas as avaliações de usuários sobre um filme específico.

```http://localhost:3000/filmes/:id/avaliacoes
  GET /filmes/:id/avaliacoes
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do item que você quer |

#### Permite que administradores removam filmes do catálogo.

```http://localhost:3000/filmes/:id/delete
  POST /filmes/:id/delete
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do item que você quer |

## Contribuição

Contribuições são sempre bem-vindas!




## Licença

Este projeto está licenciado sob a [MIT](https://choosealicense.com/licenses/mit/) License.

