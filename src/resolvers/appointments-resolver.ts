import { Query, Resolver } from 'type-graphql';

@Resolver()
export class AppointmentsResolver {
  @Query()
  async helloWorld() {
    return 'Hello World';
  }
}
