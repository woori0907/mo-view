import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchResult from "../components/SearchResult";
import styles from "./Search.module.css";

const Search = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  const getSearchResult = async () => {
    const resultsJson = await (
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=ko&query=${query}&page=1&include_adult=false`
      )
    ).json();
    console.log(resultsJson.results);
    setResults(resultsJson.results);
  };
  useEffect(() => {
    setResults(null);
    getSearchResult();
  }, [query]);

  console.log(results);

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        {results?.map((result) => (
          <SearchResult
            key={result?.id}
            id={result?.id}
            title={result?.title}
            poster={result?.poster_path}
            description={result?.overview}
            release={result?.release_date}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
