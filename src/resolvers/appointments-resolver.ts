import { Query, Resolver, Mutation } from 'type-graphql';
import { createAppointmentInput } from '../dtos/inputs/create-appointment-input';

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
  async helloWorld() {
    return 'Hello World';
  }

  @Mutation(() => Boolean)
  async createAppointment(data: createAppointmentInput) {
    return true;
  }
}
