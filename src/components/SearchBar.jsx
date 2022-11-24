import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import styles from "./SearchBar.module.css";
import { useEffect } from "react";

const SearchBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollRect, setScrollRect] = useState(null);
  const scrollRef = useRef(null);
  const [query, setQuery] = useState("");
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery("");
  };

  //
  const handleScroll = () => {
    const scroll = scrollRef?.current.getBoundingClientRect();
    console.log(window.scrollY);
    setScrollRect(scroll);
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.nav_bar_container} ${
        scrollPosition < scrollRect?.height / 2
          ? styles.nav_bar_container_normal
          : styles.nav_bar_container_fixed
      }`}
      ref={scrollRef}
    >
      <header
        className={`${styles.nav_bar} ${
          scrollPosition < scrollRect?.height
            ? styles.nav_bar_normal
            : styles.nav_bar_small
        }`}
      >
        <div>
          <h1>
            <Link to={`/`}>Mo-View</Link>
          </h1>
        </div>
        <div>
          <form>
            <input
              type="text"
              required
              placeholder="검색어를 입력하세요"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>
              <Link to={`/search/${query}`}>
                <BsSearch className={styles.btn_search} />
              </Link>
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default SearchBar;
