import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

const Movie = ({ title, id, poster }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.item_box}>
        <div className={styles.item_poster_container}>
          <img src={`https://image.tmdb.org/t/p/original/${poster}`} />
        </div>

        <div className={styles.item_title_box}>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
        </div>
      </div>
    </Link>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
