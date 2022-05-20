# federation-variants

Sample App to get started with Apollo GraphQL Federation in different variants

The repo spawns two subgraph servers Merchants and Transactions. 
Merchant Schema has a field called transactions which possess One to Many behaviour with Transactions schema

Three Gateway Federation variants are covered here

1) Using IntrospectAndCompose
2) Using supergraphSdl
3) Using Apollo Studio
