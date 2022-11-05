# Blogs API

Projeto desenvolvido no módulo de Back-end do curso de Desenvolvimento Web da [Trybe](https://www.betrybe.com/). 

## Sobre o projeto

<div align="justify">
O Blogs API é uma aplicação para a produção de conteúdo para um blog onde é possível adicionar, listar e buscar  usuários, categorias e posts pelo ID. O usuário logado poderá alterar e deletar seus posts, além de deletar também a sua conta.
</div>

## Desenvolvimento 

<div align="justify">
Foi desenvolvida uma API REST e um banco de dados onde é possível realizar o CRUD (criar, ler, atualizar e deletar) das informações. A aplicação foi desenvolvida em Node.js com Express, possui middlewares que utilizam a biblioteca Joi para validação das requisições e utiliza a arquitetura MSC (Model-Service-Controller). Foi utilizado ORM Sequelize para mapeamento ao banco de dados MySQL e Json Web Token (JWT) para realizar a geração e verificação de tokens, realizando a gestão das permissões do usuário. 
</div>

## Tecnologias

* Javascript
* Node.js
* Express
* MySQL
* Sequelize
* JWT
* Joi
* Docker

## Como rodar o projeto com Docker

1 - Navegue até a pasta desejada e rode o comando abaixo no terminal para clonar o projeto:

`git clone git@github.com:Fernanda-Vidal/blogs-api.git`

2 - Entre na pasta desejada:

`cd blogs-api`

3 - Rode o serviço node com o seguinte comando:

`docker-compose up -d --build`

4 - Acesse o bash do container:

`docker exec -it blogs_api bash`

5 - Instale as dependências do projeto e rode a aplicação:

`npm install && npm run debug`
