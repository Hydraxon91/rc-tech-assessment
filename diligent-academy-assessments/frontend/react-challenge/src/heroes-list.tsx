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

  return (
    <>
      <h2>Heroes</h2>
      <ul>
        {heroes.map((hero)=>(
          <HeroListItem key={hero.id} hero={hero}></HeroListItem>
        ))}
      </ul>
    </>
  );
}

export default HeroesList;
