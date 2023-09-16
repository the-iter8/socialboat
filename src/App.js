import React, { useEffect, useState, useMemo, useCallback } from "react";
import Navbar from "./views/Navbar";
import Main from "./views/Main";
import ErrorScreen from "./views/Error";
import LoadingScreen from "./views/Loading";
import { debounce } from "./utils/helpers";
import { fetchResults } from "./utils/api";

const defaultState = {
  data: [],
  isSearchEmpty: true,
  isError: false,
  isLoading: false,
};

function App() {
  const [results, setResults] = useState(defaultState);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useCallback(
    debounce(async (searchQuery) => {
      try {
        if (searchQuery) {
          let data = await fetchResults(`?q=${searchQuery}&numResults=10`);
          setResults({
            data: data.results,
            isError: false,
            isLoading: false,
          });
        }
      } catch (error) {
        setResults({
          data: [error],
          isError: true,
          isLoading: false,
        });
      }
    }, 350),
    [debounce]
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  useEffect(() => {
    setResults({
      data: [],
      isSearchEmpty: false,
      isError: false,
      isLoading: true,
    });
  }, [searchTerm]);

  const mainComponent = useMemo(() => {
    if (results.isLoading) {
      return <LoadingScreen />;
    } else if (results.isError) {
      return <ErrorScreen results={results} />;
    } else {
      return <Main data={results.data} selectedTags={selectedTags} />;
    }
  }, [results, selectedTags]);

  return (
    <div>
      <Navbar
        results={results}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      ></Navbar>
      {!searchTerm ? <p className='is-empty'>Please type in your query</p> : mainComponent}
    </div>
  );
}

export default App;
