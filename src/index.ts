import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { CountryResolver } from "./resolvers/countryResolver";
import { buildSchema } from "type-graphql";
import { getDataSource } from "./database";

const startApolloServer = async () => {
  const schema = await buildSchema({ resolvers: [CountryResolver] });
  const server = new ApolloServer({
    schema,
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
    context: async ({ req, res }) => ({ req, res }),
  });
  await getDataSource();

  console.log(`🚀 Server ready at: ${url}`);
};

startApolloServer();
