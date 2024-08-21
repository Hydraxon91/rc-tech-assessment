import React from 'react';
import HeroListItemProps from '../interfaces/herolistitemprops';

const HeroListItem: React.FC<HeroListItemProps> = ({ hero }) => {
    return (
        <li>
          {hero.id} - {hero.name} {hero.available ? '*Available*' : ''}
        </li>
      );
}

export default HeroListItem;
