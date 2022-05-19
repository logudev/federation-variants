import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

// Deprecated: using serviceList
// const gateway = new ApolloGateway({
//   serviceList: [
//     { name: "merchants", url: "http://localhost:5001/" },
//     { name: "transactions", url: "http://localhost:5002" },
//   ],
// });

// Latest: using IntrospectAndCompose

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "merchants", url: "http://localhost:4001/" },
      { name: "transactions", url: "http://localhost:4002" },
    ],
  }),
});

const server = new ApolloServer({ gateway, subscriptions: false });

server
  .listen({ port: 5001 })
  .then(({ url }) =>
    console.log(`Approach 1 - Gateway Server running at ${url}`)
  )
  .catch((err) => console.error(err));
