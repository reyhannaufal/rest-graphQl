import { IResolvers } from "apollo-server-express";
import { list } from "../list";

export const resolvers: IResolvers = {
  Query: {
    listings: () => {
      return list;
    },
  },
  Mutation: {
    deleteListing: {
      resolve: (_root: undefined, { id }: { id: string }) => {
        for (let i = 0; i < list.length; i++) {
          if (list[i].id === id) {
            return list.splice(i, 1)[0];
          }
        }

        throw new Error("Failed to delate");
      },
    },
  },
};
