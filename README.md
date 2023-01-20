# Repositório criado para praticar e entender GRAPHQL.

# Ferramentas 🛠️

- [Node](https://nodejs.org/en/)
- [GraphQL](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [TypeScript](https://www.typescriptlang.org/)

# Como eu fiz: 🚀

1 - npm init -y<br>
2 - npm i typescript ts-node-dev -D<br>
3 - npx tsc --init<br>
4 - npi i graphql apollo-server<br><br>

- Depois de alguns testes e commits iniciais, aumentei a complexidade do projeto com typeGraphql. Nos primeiros commits e arquivo `simple-server.ts`, eu usei a abordagem _Schema First_, onde o schema vem antes do código, sendo tudo em um único arquivo.<br><br>

- Nos commits finais, usei a abordagem _Code First_, que primeiro executa o código e o TypeGraphql junto de extensões cuidam de gerar o arquivo de schema.
<br><br>
5 - npm un graphql<br>
6 - npm i graphql class-validator type-graphql<br>

# Extensões 📲

1 - Name: [GraphQL](https://marketplace.visualstudio.com/items?itemName=mquandalle.graphql)<br>
2 - Name: [GraphQL: Language Feature Support](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)<br>
3 - Name: [GraphQL: Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql-syntax)<br>

# Observações 👀

- _inputs_ em GraphQL são o req.body que o express utiliza. É dessa forma que pegamos o que está sendo nos enviado pelo studio ou por chamada.
- _dto_ = Data Transfer object
- _models_ são tidos como uma forma de declarar os type.
