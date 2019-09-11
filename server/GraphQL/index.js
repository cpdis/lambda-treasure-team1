import { GraphQLServer} from "graphql-yoga";
import { typeDefs} from "./typeDefs";

// Can we just import graph_data?
// How do we make this data useable?

const server = new GraphQLServer({
  typeDefs,
// Add resolvers
});

server.start(_, () => {

});