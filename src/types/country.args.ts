import { Field, ArgsType } from "type-graphql";
import { MinLength } from "class-validator";

@ArgsType()
export class CreateCountry {
  @Field()
  code!: string;

  @Field()
  @MinLength(3)
  name!: string;

  @Field()
  emoji!: string;

  @Field()
  @MinLength(3)
  continent!: string;
}
