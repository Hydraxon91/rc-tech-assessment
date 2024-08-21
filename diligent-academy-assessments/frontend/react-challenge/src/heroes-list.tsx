import React from "react";
import HeroListItem from "./components/HeroListItem";
import useHeroes from "./hooks/useHeroes";
import './Styling/HeroList.css';

function HeroesList() {
  const { heroes, loading, error, toggleHeroAvailability } = useHeroes();

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
