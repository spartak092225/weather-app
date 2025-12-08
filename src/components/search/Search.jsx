import { useState, useRef, useEffect } from "react";
import styles from "./Search.module.css";

export function Search() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const containerRef = useRef(null);

  function handleClickOutside(event) {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.searchSection}>
      <h1>How's the sky looking today?</h1>
      <div className={styles.searchBarContainer}>
        <div ref={containerRef}>
          <input
            type="search"
            placeholder="Search for a place"
            onFocus={() => setIsDropdownVisible(true)}
            onChange={() => setIsDropdownVisible(true)}
          />
          <img src="icon-search.svg" alt="" />

          <div
            className={`${styles.searchDropdown} ${
              isDropdownVisible ? styles.searchDropdownOpen : ""
            }`}
          >
            <p>City name</p>
            <p>City name</p>
            <p>City name</p>
          </div>
        </div>

        <button type="submit">Search</button>
      </div>
    </div>
  );
}
