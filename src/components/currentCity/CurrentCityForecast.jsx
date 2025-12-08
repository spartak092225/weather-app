import styles from "./CurrentCityForecast.module.css";

export function CurrentCity() {
  return (
    <main>
      <div className={styles.currentCityContainer}>
        <div className={styles.mainInfo}>
          <div className={styles.locationAndDate}>
            <p className={styles.location}>Berlin, Germany</p>
            <p className={styles.date}>Tuesday, Aug 5, 2025</p>
          </div>

          <div className={styles.weatherAndTemperature}>
            <img src="icon-sunny.webp" alt="Sun icon" />
            <p className={styles.temperature}>20&deg;</p>
          </div>
        </div>
        <div className={styles.extraInfo}>
          <div className={styles.feelsLike}>
            <p className={styles.feelsLikeTitle}>Feels Like</p>
            <p className={styles.feelsLikeStat}>18&deg;</p>
          </div>
          <div className={styles.humidity}>
            <p className={styles.humidityTitle}>Humidity</p>
            <p className={styles.humidityStat}>46%</p>
          </div>
          <div className={styles.wind}>
            <p className={styles.windTitle}>Wind</p>
            <p className={styles.windStat}>14 km/h</p>
          </div>
          <div className={styles.precipitation}>
            <p className={styles.precipitationTitle}>Precipitationy</p>
            <p className={styles.precipitationStat}>0 mm</p>
          </div>
        </div>
      </div>

      <div className={styles.dailyForecastContainer}>
        <p className={styles.dailyForecastTitle}>Daily Forecast</p>
        <div className={styles.weekContainer}>
          <div className={styles.dayContainer}>
            <p className={styles.day}>Tue</p>
            <img src="icon-rain.webp" alt="Rain icon" />
            <div className={styles.highLowTemperature}>
              <p className={styles.highTemperature}>20&deg;</p>
              <p className={styles.lowTemperature}>14&deg;</p>
            </div>
          </div>

          <div className={styles.dayContainer}>
            <p className={styles.day}>Wed</p>
            <img src="icon-drizzle.webp" alt="Rain icon" />
            <div className={styles.highLowTemperature}>
              <p className={styles.highTemperature}>20&deg;</p>
              <p className={styles.lowTemperature}>14&deg;</p>
            </div>
          </div>
          <div className={styles.dayContainer}>
            <p className={styles.day}>Thu</p>
            <img src="icon-sunny.webp" alt="Rain icon" />
            <div className={styles.highLowTemperature}>
              <p className={styles.highTemperature}>20&deg;</p>
              <p className={styles.lowTemperature}>14&deg;</p>
            </div>
          </div>

          <div className={styles.dayContainer}>
            <p className={styles.day}>Fri</p>
            <img src="icon-partly-cloudy.webp" alt="Rain icon" />
            <div className={styles.highLowTemperature}>
              <p className={styles.highTemperature}>20&deg;</p>
              <p className={styles.lowTemperature}>14&deg;</p>
            </div>
          </div>

          <div className={styles.dayContainer}>
            <p className={styles.day}>Sat</p>
            <img src="icon-storm.webp" alt="Rain icon" />
            <div className={styles.highLowTemperature}>
              <p className={styles.highTemperature}>20&deg;</p>
              <p className={styles.lowTemperature}>14&deg;</p>
            </div>
          </div>

          <div className={styles.dayContainer}>
            <p className={styles.day}>Sun</p>
            <img src="icon-snow.webp" alt="Rain icon" />
            <div className={styles.highLowTemperature}>
              <p className={styles.highTemperature}>20&deg;</p>
              <p className={styles.lowTemperature}>14&deg;</p>
            </div>
          </div>

          <div className={styles.dayContainer}></div>

          <div className={styles.dayContainer}>
            <p className={styles.day}>Mon</p>
            <img src="icon-fog.webp" alt="Rain icon" />
            <div className={styles.highLowTemperature}>
              <p className={styles.highTemperature}>20&deg;</p>
              <p className={styles.lowTemperature}>14&deg;</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.hourlyForecastContainer}>
        <div className={styles.titleAndDaySelector}>
          <p></p>
          <select
            name="daySelector"
            id="daySelector"
            className={styles.daySelector}
          >
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
        </div>

        <div className={styles.hourForecast}>
          <div className={styles.weatherAndTime}>
            <img src="icon-overcast.webp" alt="Overcast icon" />
            <p> 3 PM</p>
          </div>
          <p className={styles.hourTemperature}>25&deg;</p>
        </div>

        <div className={styles.hourForecast}>
          <div className={styles.weatherAndTime}>
            <img src="icon-overcast.webp" alt="Overcast icon" />
            <p> 3 PM</p>
          </div>
          <p className={styles.hourTemperature}>25&deg;</p>
        </div>

        <div className={styles.hourForecast}>
          <div className={styles.weatherAndTime}>
            <img src="icon-overcast.webp" alt="Overcast icon" />
            <p> 3 PM</p>
          </div>
          <p className={styles.hourTemperature}>25&deg;</p>
        </div>

        <div className={styles.hourForecast}>
          <div className={styles.weatherAndTime}>
            <img src="icon-overcast.webp" alt="Overcast icon" />
            <p> 3 PM</p>
          </div>
          <p className={styles.hourTemperature}>25&deg;</p>
        </div>

        <div className={styles.hourForecast}>
          <div className={styles.weatherAndTime}>
            <img src="icon-overcast.webp" alt="Overcast icon" />
            <p> 3 PM</p>
          </div>
          <p className={styles.hourTemperature}>25&deg;</p>
        </div>

        <div className={styles.hourForecast}>
          <div className={styles.weatherAndTime}>
            <img src="icon-overcast.webp" alt="Overcast icon" />
            <p> 3 PM</p>
          </div>
          <p className={styles.hourTemperature}>25&deg;</p>
        </div>

        <div className={styles.hourForecast}>
          <div className={styles.weatherAndTime}>
            <img src="icon-overcast.webp" alt="Overcast icon" />
            <p> 3 PM</p>
          </div>
          <p className={styles.hourTemperature}>25&deg;</p>
        </div>

        <div className={styles.hourForecast}>
          <div className={styles.weatherAndTime}>
            <img src="icon-overcast.webp" alt="Overcast icon" />
            <p> 3 PM</p>
          </div>
          <p className={styles.hourTemperature}>25&deg;</p>
        </div>
      </div>
    </main>
  );
}
