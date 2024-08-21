import React from 'react';
import HeroListItemProps from '../interfaces/herolistitemprops';

const HeroListItem: React.FC<HeroListItemProps> = ({ hero, onToggleAvailability  }) => {
    return (
        <li>
            <span 
                onClick={() => onToggleAvailability(hero.id)}
                style={{ cursor: 'pointer'}}
            >
                {hero.id} - {hero.name} {hero.available ? '*Available*' : ''}
            </span>
        </li>
      );
}

export default HeroListItem;
