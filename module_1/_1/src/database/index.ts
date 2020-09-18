import { MongoClient } from "mongodb";
import { Database } from "../lib/type";

const user = process.env.DB_USER;
const password = process.env.DB_USER_PASSWORD;
const cluster = process.env.DB_CLUSTER;

const url = `mongodb+srv://${user}:${password}@${cluster}.mongodb.net/<dbname>?retryWrites=true&w=majority`;

export const connectDB = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true });

  const db = client.db("main");

  return {
    listings: db.collection("test_listings"),
  };
};
