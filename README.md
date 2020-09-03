# Desafio - Biblioteca Devchallenge :rocket:
O desafio é desenvolver o back-end de uma biblioteca contendo às quatro operações do CRUD: Create (Criação), Read (Consulta), Update (Atualização) e Delete (Destruição).

O desafio encontra-se disponível nesse <a href="https://github.com/devchallenge-io/biblioteca-backend">link</a>.

# Techs: :book:
- NodeJS
- TypeScript
- Express
- PostgreSQL
- Babel

## Rotas da aplicação:

### <b>[POST] </b> /books  
![imageGET](./db/POST.PNG)

### <b>[GET] </b> /books/
![imageGET](./db/GET.PNG)

### <b>[PUT] </b> /books/:id:
![imageGET](./db/PUT.PNG)

### <b>[DELETE] </b> /books/:id:
![imageGET](./db/DELETE.PNG)


## Como rodar? :fire:
1. Clone este repositório.
2. Instalar o PostgreSQL e rodar o script-table (./db/script-table.sql).
3. Rode no seu terminal `npm i` para instalar todas as dependências necessárias do projeto.
4. Rode no seu terminal `npm run start` para subir a aplicação no endereço `http://localhost:3000`.