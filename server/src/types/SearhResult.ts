import { Document } from "mongoose";
export interface ISearchResult extends Document {
  title: string;
  photo: string;
  description: string;
  shortDescription: string;
}
