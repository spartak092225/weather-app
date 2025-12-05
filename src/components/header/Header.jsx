import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className={styles.header}>
      <img src="logo.svg" alt="logo" />

      <div className={styles.unitsSelectorContainer} ref={containerRef}>
        <div
          className={styles.unitsBtn}
          onClick={() => setOpen((prev) => !prev)}
        >
          <img src="icon-units.svg" alt="gear icon" />
          <p>Units</p>
          <img src="icon-dropdown.svg" alt="" />
        </div>

        <div
          className={`${styles.dropdownContent} ${
            open ? styles.dropdownOpen : ""
          }`}
        >
          <h4>Switch to Imperial</h4>

          <fieldset>
            <legend>Temperature</legend>
            <div className={styles.temperatureOptions}>
              <label htmlFor="celsius">
                Celsius (℃)
                <input type="radio" id="celsius" name="temperature" />
              </label>

              <label htmlFor="fahrenheit">
                Fahrenheit (℉)
                <input type="radio" id="fahrenheit" name="temperature" />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Wind Speed</legend>
            <div className={styles.windSpeedOptions}>
              <label htmlFor="kmh">
                km/h <input type="radio" id="kmh" name="speed" />
              </label>
              <label htmlFor="mph">
                mph <input type="radio" id="mph" name="speed" />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Precipitation</legend>
            <div className={styles.precipitationOptions}>
              <label htmlFor="mm">
                Millimeters (mm)
                <input type="radio" id="mm" name="precipitation" />
              </label>
              <label htmlFor="inches">
                Inches (in)
                <input type="radio" id="inches" name="precipitation" />
              </label>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
