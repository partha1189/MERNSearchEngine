import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import { ISearchResult } from "./types/SearchResult";
import { FaSearch } from "react-icons/fa";

function App() {
  const [search, setSearch] = useState<string | undefined>("");
  const [searchResults, setSearchResults] = useState<ISearchResult[]>();
  const inputRef = useRef<HTMLInputElement>(null);

  const getSearchResults = async (
    searhKey: string | undefined
  ): Promise<ISearchResult[]> => {
    const result = await axios.get(`http://localhost:4000/search/${searhKey}`);
    return (await result).data;
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLFormElement, MouseEvent>
  ): void => {
    event.preventDefault();
    let searchKey: string | undefined = inputRef?.current?.value;
    setSearch(searchKey);
  };

  useEffect(() => {
    (async () => {
      if (search) {
        const response = await getSearchResults(search);
        console.log(response);
        setSearchResults(response);
      }
    })();
  }, [search]);

  return (
    <div className="container">
      <h1 className="title">SEARCH APP</h1>
      <div className="wrapper">
        <form onClick={(event) => handleSubmit(event)} method="POST">
          <div className="wrapper__inputBox">
            <FaSearch className="wrapper__inputBox-icon" />
            <input
              className="wrapper__inputBox-input"
              ref={inputRef}
              type="text"
              name=""
              id=""
            />
          </div>

          <button className="wrapper__button" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
