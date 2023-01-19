import { Field, ObjectType } from 'type-graphql';

// aqui eu só vou exibir as informações que eu quero que o frontend consuma
@ObjectType()
export class Appointment {
  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}
