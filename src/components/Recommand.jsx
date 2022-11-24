import { Link } from "react-router-dom";
import styles from "./Recommand.module.css";

const Recommand = ({ title, poster, vote_average, id }) => {
  return (
    <>
      <Link to={`/movie/${id}`}>
        <div className={styles.item_box}>
          <div className={styles.item_poster_img}>
            {poster != undefined ? (
              <img
                src={`https://image.tmdb.org/t/p/original/${poster}`}
                alt={title}
              />
            ) : (
              <div className={styles.poster_undef}></div>
            )}
          </div>
          <div className={styles.item_title_box}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Recommand;
