import React from 'react';
import HeroListItemProps from '../interfaces/herolistitemprops';
import '../Styling/HeroListItem.css';

const HeroListItem: React.FC<HeroListItemProps> = ({ hero, onToggleAvailability  }) => {
    const handleClick = () => {
        onToggleAvailability(hero.id);
      };

    return (
        <li
        key={hero.id}
            className={`hero-list-item ${hero.available ? 'available' : 'unavailable'}`}
            onClick={handleClick}
        >
            {hero.id} - {hero.name} {hero.available ? '*Available*' : ''}
        </li>
      );
}

export default HeroListItem;
