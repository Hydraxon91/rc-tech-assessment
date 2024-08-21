import { useState, useEffect } from "react";
import { callApi } from "../call-api";
import Hero from "../interfaces/hero";

type UseHeroesResult = {
    heroes: Hero[];
    loading: boolean;
    error: string | null;
    toggleHeroAvailability: (id: number) => void;
  };

  const useHeroes = (): UseHeroesResult => {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchHeroes = async () => {
        setLoading(true);
        setError(null);
  
        try {
          const heroList = await callApi<Hero[]>('heroes');
          setHeroes(heroList);
        } catch (error) {
          setError('Failed to fetch heroes.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchHeroes();
    }, []);
  
    const toggleHeroAvailability = (id: number) => {
      setHeroes((prevHeroes) =>
        prevHeroes.map((hero) =>
          hero.id === id ? { ...hero, available: !hero.available } : hero
        )
      );
    };
  
    return {
      heroes,
      loading,
      error,
      toggleHeroAvailability,
    };
  };
  
  export default useHeroes;