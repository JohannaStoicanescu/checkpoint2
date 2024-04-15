import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/country";
import { CreateCountry } from "../types/country.args";

@Resolver(Country)
export class CountryResolver {
  @Mutation(() => Country)
  async createCountry(@Args() args: CreateCountry) {
    return Country.createCountry(args);
  }
  
  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return Country.find();
  }

  @Query(() => Country, { nullable: true })
  async countryByCode(@Arg("code") code: string): Promise<Country | null> {
    const country = await Country.findOne({ where: { code } });
    return country || null;
  }

  @Query(() => [Country])
  async countriesByContinent(
    @Arg("continent") continent: string
  ): Promise<Country[]> {
    const countries = await Country.find({ where: { continent } });
    return countries;
  }
}
