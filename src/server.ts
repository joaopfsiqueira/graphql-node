import { ApolloServer } from 'apollo-server';
import 'reflect-metadata';

async function bootstrap() {
  const server = new ApolloServer({});

  const { url } = await server.listen();

  console.log(`🚀  Server ready at ${url}`);
}

bootstrap();
