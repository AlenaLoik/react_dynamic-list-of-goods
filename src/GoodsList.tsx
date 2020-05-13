import React from 'react';
import Good from './Good';

type GoodsList = {
  goods: Good[];
};

export const GoodsList: React.FC<GoodsList> = ({ goods }) => (
  <ul className="good__list">
    {goods.map(good => (
      <li
        style={{ color: `${good.color}` }}
        key={good.id}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
