import { useEffect, useState } from "react";
import ApiClient from "../components/Api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    ApiClient.get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        console.log(response.data); // Log the response
        setGenre(response.data.results);
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

  return { genre, error, loading };
};
export default useGenre;
