const { GraphQLServer} = require("graphql-yoga");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
// Can we just import graph_data?
// How do we make this data useable?

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log('Server is running on ****4000****.')
});