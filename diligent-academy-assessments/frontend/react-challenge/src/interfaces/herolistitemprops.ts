import Hero from "./hero";
interface HeroListItemProps {
    hero: Hero;
    onToggleAvailability: (id: number) => void;
  }

 export default HeroListItemProps;