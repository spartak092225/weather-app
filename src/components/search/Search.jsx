import axios from "axios";
import { useState, useRef, useEffect } from "react";
import styles from "./Search.module.css";

export function Search({ setLocation }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const containerRef = useRef(null);

  async function handleSearch(q) {
    setQuery(q);

    if (!q.trim()) {
      setResults([]);
      setIsDropdownVisible(false);
      return;
    }

    try {
      const response = await axios.get(
        "https://geocoding-api.open-meteo.com/v1/search",
        { params: { name: q, count: 5 } }
      );

      setResults(response.data.results || []);
      setIsDropdownVisible(true);
    } catch (error) {
      console.error("Search error:", error);
    }
  }

  function selectCity(city) {
    setLocation({
      latitude: city.latitude,
      longitude: city.longitude,
      name: city.name,
    });

    setIsDropdownVisible(false);
    setQuery("");
  }

  // Close dropdown when clicking outside
  function handleClickOutside(event) {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  return (
    <div className={styles.searchSection}>
      <h1>How's the sky looking today?</h1>

      <div className={styles.searchBarContainer} ref={containerRef}>
        <div style={{ position: "relative" }}>
          <input
            type="search"
            value={query}
            placeholder="Search for a place"
            onChange={(e) => handleSearch(e.target.value)}
          />

          <img src="icon-search.svg" alt="" />

          {isDropdownVisible && results.length > 0 && (
            <div className={styles.searchDropdown}>
              {results.map((city) => (
                <p key={city.id} onClick={() => selectCity(city)}>
                  {city.name}, {city.country}
                </p>
              ))}
            </div>
          )}
        </div>

        <button type="submit">Search</button>
      </div>
    </div>
  );
}
