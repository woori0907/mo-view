import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./SearchResult.module.css";

const SearchResult = ({ title, poster, description, id, release }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.item_box}>
        <div className={styles.item_poster_img}>
          <img
            src={`https://image.tmdb.org/t/p/original/${poster}`}
            alt={title}
          />
        </div>
        <div className={styles.item_info}>
          <h3>{title}</h3>
          <p className={styles.release}>{release}</p>
          <p>{`${description.slice(0, 75)}...`}</p>
        </div>
      </div>
    </Link>
  );
};

SearchResult.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SearchResult;
