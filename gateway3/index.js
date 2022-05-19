import "dotenv/config";
import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

const gateway = new ApolloGateway();

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server
  .listen({ port: 5003 })
  .then(({ url }) =>
    console.log(`Approach 3 - Gateway Server running at ${url}`)
  )
  .catch((err) => console.error(err));
