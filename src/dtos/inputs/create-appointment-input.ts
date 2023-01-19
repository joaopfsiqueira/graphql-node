import { InputType, Field } from 'type-graphql';

@InputType()
export class createAppointmentInput {
  @Field()
  customerid: string;

  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}
