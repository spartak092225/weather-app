import styles from "./Search.module.css";

export function Search() {
  return (
    <div className={styles.searchSection}>
      <h1>How's the sky looking today?</h1>
      <div className={styles.searchBarContainer}>
        <div>
          <input type="search" placeholder="Search for a place" />
          <img src="icon-search.svg" alt="" />
          <div className={styles.searchDropdown}>
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
