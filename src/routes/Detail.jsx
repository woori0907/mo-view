import { useEffect, useState, useCallback } from "react";
import { json, useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [recommands, setRecommands] = useState(null);
  const [credits, setCredits] = useState(null);
  const getMovie = useCallback(async () => {
    if (id != undefined) {
      console.log("fetch");
      const json =
        await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=ko&append_to_response=videos
      `).then((res) => res.json());
      const recommandJson = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=ko&page=1`
      ).then((res) => res.json());
      const creditJson = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=ko
        `
      ).then((res) => res.json());
      if (json != null && recommandJson != null && creditJson != null) {
        setDetail(json);
        setRecommands(recommandJson);
        setCredits(creditJson);
      }
      console.log(json);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getMovie();
  }, [id]);

  return (
    <>
      <MovieDetail
        title={detail?.title}
        release={detail?.release_date}
        runtime={detail?.runtime}
        copy={detail?.tagline}
        genres={detail?.genres}
        poster={detail?.poster_path}
        description={detail?.overview}
        recommands={recommands?.results}
        actors={credits?.cast}
      />
    </>
  );
};

export default Detail;
