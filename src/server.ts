import { ApolloServer } from 'apollo-server';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { AppointmentsResolver } from './resolvers/appointments-resolver';
import path from 'node:path';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppointmentsResolver],
    emitSchemaFile: path.resolve(__dirname, './schema.graphql'),
  });
  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`🚀  Server ready at ${url}`);
}

bootstrap();
