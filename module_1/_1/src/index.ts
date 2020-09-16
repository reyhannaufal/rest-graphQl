require("dotenv").config();

import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";

import { schema } from "./graphql";
import { connectDB } from "./dataabase";

const mount = async (app: Application) => {
  const db = await connectDB();
  const server = new ApolloServer({
    schema,
    context: () => {
      db;
    },
  });
  server.applyMiddleware({ app, path: "/api" });

  app.listen(process.env.PORT);

  console.log(`[App]: http://localhost:${process.env.PORT}`);

  const listings = await db.listings.find({}).toArray();
  console.log(listings[0]);
};

mount(express());
