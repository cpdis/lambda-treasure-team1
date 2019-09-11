import { GraphQLServer} from "graphql-yoga";
import { typeDefs} from "./typeDefs";

const server = new GraphQLServer({
  typeDefs,

});

server.start(_, () => {

});