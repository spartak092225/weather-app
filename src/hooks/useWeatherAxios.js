import { useEffect, useState } from "react";
import axios from "axios";

export function useWeatherAxios({
  latitude,
  longitude,
  hourly = "temperature_2m",
  daily = null,
  timezone = "auto",
}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (latitude == null || longitude == null) return;

    const controller = new AbortController();

    async function fetchWeather() {
      setLoading(true);
      try {
        const params = {
          latitude,
          longitude,
          timezone,
        };
        if (hourly) params.hourly = hourly;
        if (daily) params.daily = daily;

        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast",
          { params, signal: controller.signal }
        );

        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) return;
        setError(err.message ?? String(err));
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
    return () => controller.abort();
  }, [latitude, longitude, hourly, daily, timezone]);

  return { data, loading, error };
}
