import PropTypes from "prop-types";
import { useState } from "react";
import Actor from "./Actor";
import styles from "./MovieDetail.module.css";
import Recommand from "./Recommand";

const MovieDetail = ({
  title,
  poster,
  copy,
  release,
  runtime,
  genres,
  description,
  recommands,
  actors,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {console.log(recommands)}
      <div className={styles.movie_detail_container}>
        <div className={styles.info_container}>
          <div className={styles.bg_black}></div>
          <div
            className={styles.bg_img}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})`,
            }}
          ></div>
          <div className={styles.info_column}>
            <div className={styles.info_img}>
              <img
                src={`https://image.tmdb.org/t/p/original/${poster}`}
                alt={title}
              />
            </div>
            <div className={styles.info_description}>
              <h1>{title}</h1>
              <div className={styles.desc_misc}>
                <p>{release} /&nbsp;</p>
                {genres?.map((genre, i) => (
                  <b key={genre.id}>{genre.name}&nbsp; </b>
                ))}
                <p> / {`${Math.floor(runtime / 60)}시간 ${runtime % 60}분`}</p>
              </div>
              {copy != undefined ? <i>{copy}</i> : <i></i>}

              <div className={styles.desc_article}>
                <h3>개요</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.actors_container}>
          <h3>주요 출연진</h3>
          <div className={styles.actors_column}>
            {actors != null ? (
              actors
                .slice(0, 9)
                .map((actor) => (
                  <Actor
                    key={actor.id}
                    character={actor.character}
                    name={actor.name}
                    profileFic={actor.profile_path}
                  />
                ))
            ) : (
              <h3>Loading</h3>
            )}
          </div>
        </div>
        <div className={styles.recommands_container}>
          <h3>{title}과 비슷한 작품</h3>
          <div className={styles.recommands_column}>
            {recommands != null ? (
              recommands?.map((recommand) => (
                <Recommand
                  title={recommand?.title}
                  poster={recommand?.backdrop_path}
                  vote_average={recommand?.vote_average}
                  id={recommand?.id}
                />
              ))
            ) : (
              <h3>Loading</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

MovieDetail.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  recommands: PropTypes.arrayOf(Object).isRequired,
};

export default MovieDetail;
