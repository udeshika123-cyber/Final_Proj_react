import { useEffect, useState } from "react";
import ApiClient from "../components/Api-client";
import { CanceledError } from "axios";

export interface platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: platform }[];
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    ApiClient.get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((response) => {
        console.log(response.data); // Log the response
        setGames(response.data.results);
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

  return { games, error, loading };
};
export default useGames;
