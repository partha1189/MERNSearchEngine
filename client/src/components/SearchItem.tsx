import React from "react";
import { Link, Route } from "react-router-dom";
import { SearchResultProps } from "../types/SearchResult";
import "./SearchItem.css";

type Props = SearchResultProps;

const SearchItem: React.FC<Props> = ({ searchResult }) => {
  return (
    <div className="search__container">
      <div className="search__wrapper">
        <div className="leftCol">
          <img className="leftCol__img" src={searchResult.photo} alt="" />
        </div>
        <div className="rightCol">
          <Link to={`/searchResults/${searchResult._id}`}>
            <h2>{searchResult.title}</h2>
          </Link>

          <span>{searchResult.shortDescription}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
