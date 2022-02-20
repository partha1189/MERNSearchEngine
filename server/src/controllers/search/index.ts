import { Request, Response } from "express";
import SearchResult from "../../models/SearchResult";
import { ISearchResult } from "../../types/SearhResult";

const getSearchResults = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { searchKey },
    } = req;
    console.log("Search Key: ", searchKey);
    const searchResult = await SearchResult.find({
      title: searchKey,
    }).exec();

    res.status(200).json(searchResult);
  } catch (error) {
    throw error;
  }
};

const addSearchItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as ISearchResult;
    console.log("Body: ", body);

    const searchResult: ISearchResult = new SearchResult({
      title: body.title,
      description: body.description,
      shortDescription: body.shortDescription,
      photo: body.photo,
    });
    const newSearchResult: ISearchResult = await searchResult.save();
    res
      .status(201)
      .json({ message: "Search Result Added", searchResult: newSearchResult });
  } catch (error) {
    throw error;
  }
};

export { getSearchResults, addSearchItem };
