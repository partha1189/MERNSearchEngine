import React from "react";
import "./SearchResults.css";
import SearchItem from "./SearchItem";
import { ISearchResult } from "../types/SearchResult";
const SearchResults = ({
  searchResults,
}: {
  searchResults: ISearchResult[] | undefined;
}) => {
  return (
    <>
      {searchResults &&
        searchResults.map((searchItem: ISearchResult) => (
          <SearchItem key={searchItem._id} searchResult={searchItem} />
        ))}
    </>
  );
};

export default SearchResults;
