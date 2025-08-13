import { useEffect, useState } from "react";
import ApiClient from "../components/Api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    ApiClient.get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((response) => {
        console.log(response.data); // Log the response
        setGames(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        console.error(error); // Log the error
        return () => {
          controller.abort();
        };
      });
  }, []);

  return { games, error };
};
export default useGames;
