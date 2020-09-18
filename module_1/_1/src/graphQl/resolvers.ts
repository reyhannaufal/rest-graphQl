import { IResolvers } from "apollo-server-express";
import { ObjectID } from "mongodb";
import { Database } from "../lib/type";

export const resolvers: IResolvers = {
  Query: {
    listings: async (_root: undefined, _args: {}, { db }: { db: Database }) => {
      return await db.listings.find({}).toArray();
    },
  },
  Mutation: {
    deleteListing: {
      resolve: (
        _root: undefined,
        { id }: { id: string },
        { db }: { db: Database }
      ) => {
        const deleteRes = await db.listings.findOneAndDelete({
          _id: new ObjectID(id),
        });

        if (!deleteRes.value) {
          throw new Error("Failde to delete listings!");
        }

        return deleteRes.value;
      },
    },
  },
};
