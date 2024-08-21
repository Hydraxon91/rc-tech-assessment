import React, {useState, useEffect} from "react";
import { callApi } from "./call-api";
import Hero from "./interfaces/hero";
import HeroListItem from "./components/HeroListItem";


function HeroesList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const heroList = await callApi<Hero[]>('heroes');
        setHeroes(heroList);
      } catch (error) {
        console.error("Failed to fetch heroes:", error);
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

  return (
    <>
      <h2>Heroes</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {heroes.map((hero)=>(
          <HeroListItem 
            key={hero.id} 
            hero={hero}
            onToggleAvailability={toggleHeroAvailability}
          ></HeroListItem>
        ))}
      </ul>
    </>
  );
}

export default HeroesList;
