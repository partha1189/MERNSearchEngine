import { Request, Response } from "express";
import { ISearchResult } from "../../types/SearhResult";

const getSearchResults = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { searchKey },
    } = req;
    console.log("Search Key: ", searchKey);

    const searchResult: ISearchResult = {
      title: "title",
      description: "desc",
      shortDescription: "short desc",
      photo: "photo url",
    };
    res.status(200).json(searchResult);
  } catch (error) {
    throw error;
  }
};

export { getSearchResults };
