import { buildSchema} from "graphql";
const express = require('express');
const GqlHTTP = require('express-graphql');
const server = express();

const schema = buildSchema(`
    enum Error {
        String
  }
  
  enum Message {
      Strings
  }
  
  enum Exit {
      String
  }
  
  enum Item {
      String
  }
  
  enum Status {
      String
  }
  
  type Player {
      name: String!
      cooldown: Float!
      encumbrance: Int!
      strength: Int!
      speed: Int!
      gold: Int!
      inventory: [Item!]
      status: [Status!]
      errors: [Error]
      messages: [Message]
  }
  
  type Room {
      room_id: Int!
      title: String!
      description: String!
      coordinates: String!
      elevation: Int!
      terrain: String!
      players: [Player!]
      items: [Item!]
      exits: [Exit]
      cooldown: Int!
      errors: [Error]
      messages: [Message]
  }
`);

const root = {
  query: () => {
  return -1;
  }
};

const GQLServer = server.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

GQLServer.listen(4000);