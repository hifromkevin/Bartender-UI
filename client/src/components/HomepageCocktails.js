import 'babel-polyfill';
import React from 'react';

import Heading from './Heading';

const HomepageCocktails = ({ cocktails, setSelectedPage }) => (
  <div className='cocktailStation'>
    <Heading coloring='white' heading='Available Cocktails' />
    <div className='cocktailStation__container'>
      <div className='cocktailStation__list' style={{ width: (cocktails.length * 475) }}>
        {cocktails.map((cocktail, cocktailIndex) => (
          <div
            className='cocktail'
            key={cocktailIndex}
            onClick={() => setSelectedPage('selectedCocktail', cocktail)}
          >
            <div className='cocktail__container'>
              <div className='cocktail__container__image'>
                <img src={cocktail.cocktailImage} />
              </div>
              <div className='cocktail__container__tag'>
                <span className='cocktail__container__tag__name'>{cocktail.cocktailName}</span>
                <div className='cocktail__container__tag__separator'></div>
                <span className='cocktail__container__tag__description'>{cocktail.cocktailDescription}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HomepageCocktails;