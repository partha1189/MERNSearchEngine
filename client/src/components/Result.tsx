import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ISearchResult } from "../types/SearchResult";
import "./Result.css";

const Result = (props: { match: { params: any; location: any } }) => {
  const params = props.match.params;
  const location = props.match.location;
  const [searchResult, setSearchResult] = useState<ISearchResult>();
  console.log(params);

  const getSearchResult = async (id: string): Promise<ISearchResult> => {
    const result = await axios.get(`http://localhost:4000/search/item/${id}`);
    return (await result).data;
  };

  useEffect(() => {
    (async () => {
      if (params.id) {
        const response = await getSearchResult(params.id);
        console.log("RESULT: ", response);
        setSearchResult(response);
      }
    })();
  }, [params.id]);
  return (
    <>
      <Link to="/">Home</Link>
      {searchResult && (
        <div className="result__container">
          <div className="result__wrapper">
            <div className="result__leftCol">
              <img
                className="result__leftCol-img"
                src={searchResult.photo}
                alt=""
              />
            </div>
            <div className="result__rightCol">
              <h2>{searchResult.title}</h2>
              <div className="result__descItem">
                <h3>Description</h3>
                <p>{searchResult.description}</p>
              </div>
              <div className="result__shortDescItem">
                <h3>Short Description</h3>
                <span>{searchResult.shortDescription}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Result;
