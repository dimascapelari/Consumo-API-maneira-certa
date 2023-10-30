import { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/",
});

export function useFetcth<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, isFetching, error };
}
