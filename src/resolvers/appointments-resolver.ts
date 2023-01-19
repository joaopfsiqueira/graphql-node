import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { createAppointmentInput } from '../dtos/inputs/create-appointment-input';

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
  async helloWorld() {
    return 'Hello World';
  }

  @Mutation(() => Boolean)
  async createAppointment(@Arg('data') data: createAppointmentInput) {
    return true;
  }
}
