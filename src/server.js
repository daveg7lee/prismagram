require("dotenv").config;
import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
    type Query {
        hello: String!
    }
`;

const resolvers = {
    hello = () => "Hi"
}

const sever = new GraphQLServer({ typeDefs, resolvers });
