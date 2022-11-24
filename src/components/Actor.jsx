import styles from "./Actor.module.css";

const Actor = ({ character, name, profileFic }) => {
  return (
    <>
      <div className={styles.item_box}>
        <div className={styles.item_profile_img}>
          {profileFic != undefined ? (
            <img src={`https://image.tmdb.org/t/p/original/${profileFic}`} />
          ) : (
            <div className={styles.profile_undef}></div>
          )}
        </div>
        <div className={styles.item_profile_info}>
          <b>{character}</b>
          <p>{name}</p>
        </div>
      </div>
    </>
  );
};

export default Actor;
