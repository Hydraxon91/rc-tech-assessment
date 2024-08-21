import React, { useState, useEffect } from "react";
import { callApi } from "./call-api";
import Hero from "./interfaces/hero";
import HeroListItem from "./components/HeroListItem";
import './Styling/HeroList.css'

function HeroesList() {
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h2>Heroes</h2>
      <div className="hero-list">
        {heroes.map((hero) => (
          <HeroListItem 
            key={hero.id} 
            hero={hero}
            onToggleAvailability={toggleHeroAvailability}
          />
        ))}
      </div>
    </>
  );
}

export default HeroesList;
