import { Collection } from "mongodb";

export interface Listing {
  _id: string;
  title: string;
  image: string;
  adress: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  rating: number;
}

export interface Database {
  listings: Collection<Listing>;
}
