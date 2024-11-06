# Teste de API com Postman

## Descrição
Este repositório contém os cenários de teste para a prova de API utilizando a **API DummyJSON**. Foram desenvolvidos três cenários de teste utilizando os métodos `GET`, `POST`, e `PUT`.

## API Utilizada
A API escolhida para esta prova foi a **DummyJSON API**, que fornece dados fictícios para teste. Mais informações sobre a API podem ser encontradas em [DummyJSON Documentation](https://dummyjson.com/).

## Cenários de Teste

### 1. Cenário GET - Buscar detalhes de um produto específico
   - **Método**: `GET`
   - **Endpoint**: `/products/{id}`
   - **Descrição**: Recupera os detalhes de um produto específico pelo ID fornecido.

### 2. Cenário POST - Criar um novo usuário
   - **Método**: `POST`
   - **Endpoint**: `/users/add`
   - **Descrição**: Testa a criação de um novo usuário com os dados enviados, incluindo nome, sobrenome, idade e e-mail.

### 3. Cenário PUT - Atualizar um usuário com ID inválido (caso negativo)
   - **Método**: `PUT`
   - **Endpoint**: `/users/2222`
   - **Descrição**: Tenta atualizar um usuário utilizando um ID inexistente, simulando um erro de recurso não encontrado.

## Execução dos Testes

## Pré-requisitos

- [Node.js](https://nodejs.org/) e [Newman](https://www.npmjs.com/package/newman) instalados:
  ```bash
  npm install -g newman
  npm install -g newman-reporter-htmlextra
  npm i


## Executar os testes
  ```bash
  git clone https://github.com/ThulioBalbuena/NP2_S206.git
  cd PostMan
  newman run "Dummy.postman_collection.json" -r htmlextra