import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";
import { readFileSync } from "fs";

const supergraphSdl = readFileSync("./supergraph.graphql").toString();

const gateway = new ApolloGateway({
  supergraphSdl,
});

const server = new ApolloServer({ gateway, subscriptions: false });

server
  .listen({ port: 5002 })
  .then(({ url }) =>
    console.log(`Approach 2 - Gateway Server running at ${url}`)
  )
  .catch((err) => console.error(err));
