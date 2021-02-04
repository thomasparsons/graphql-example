import typeResolvers from "./resolvers/index";
import typeDefinitions from "./schema/index";

const { ApolloServer } = require("apollo-server");

const { PORT = 3001 } = process.env;

const server = new ApolloServer({
  context: () => {
    return {
      dogYears: 6,
      catYears: 7,
    };
  },
  resolvers: typeResolvers,
  typeDefs: typeDefinitions,
});

server.listen({ port: PORT }).then(({ url }: any) => {
  return console.log(`🚀 Server ready at ${url}`); // eslint-disable-line no-console
});
