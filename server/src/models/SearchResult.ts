import { model, Schema } from "mongoose";
import { ISearchResult } from "../types/SearhResult";

const searchResultSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<ISearchResult>("SearchResult", searchResultSchema);
