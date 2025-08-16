import { useEffect, useState } from "react";
import ApiClient from "../components/Api-client";
import { CanceledError } from "axios";

interface FetchResponses<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    ApiClient.get<FetchResponses<T>>(endpoint, { signal: controller.signal })
      .then((response) => {
        console.log(response.data); // Log the response
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
        console.error(error); // Log the error
        return () => {
          controller.abort();
        };
      });
  }, []);

  return { data, error, loading };
};
export default useData;
