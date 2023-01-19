import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      helloWorld: () => 'Hello World',
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  console.log(`🚀  GraphQL Playground available at ${url}/graphql`);
});
