import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreateCountry } from "../types/country.args";

@Entity()
@ObjectType()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Field()
  @Column()
  code!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  emoji!: string;

  @Field()
  @Column()
  continent!: string;

  constructor(country?: CreateCountry) {
    super();

    if (country) {
      if (!country.code) {
        throw new Error("Code is required");
      }
      this.code = country.code;

      if (!country.name) {
        throw new Error("Name is required");
      }
      this.name = country.name;

      if (!country.emoji) {
        throw new Error("Emoji is required");
      }
      this.emoji = country.emoji;

      if (!country.continent) {
        throw new Error("Continent is required");
      }
      this.continent = country.continent;
    }
  }
  static async createCountry(country?: CreateCountry) {
    return new Country(country).save();
  }
}
