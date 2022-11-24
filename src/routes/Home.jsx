import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getBoxOfficeRank = async () => {
    const json = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=ko&page=1
      `
    ).then((res) => res.json());

    setMovies(json.results);
  };
  const getMovies = async () => {
    getBoxOfficeRank();
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className={styles.movie}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              id={movie.id}
              poster={movie.poster_path}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
