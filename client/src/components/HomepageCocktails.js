import 'babel-polyfill';
import React from 'react';

import Heading from './Heading';

const HomepageCocktails = ({ cocktails, setSelectedPage }) => (
  <div className='cocktailStation'>
    <Heading coloring='white' heading='Available Cocktails' />
    <div className='cocktailStation__container'>
      {/* This assumes 60vh ~= 288px */}
      <div className='cocktailStation__list' style={{ width: (cocktails.length * 300) }}>
        {cocktails.length && cocktails.map((cocktail, cocktailIndex) => {
          const heroImage = {
            'backgroundImage': `url(${cocktail.cocktailImage})`,
            'backgroundPosition': 'center',
            'backgroundSize': 'cover'
          }

          return (
            <div
              className='cocktail'
              key={cocktailIndex}
              onClick={() => setSelectedPage('selectedCocktail', cocktail)}
            >
              <div className='cocktail__container'>
                <div className='cocktail__container__image' style={heroImage}></div>
                <div className='cocktail__container__tag'>
                  <span className='cocktail__container__tag__name'>{cocktail.cocktailName}</span>
                  <div className='cocktail__container__tag__separator'></div>
                  <span className='cocktail__container__tag__description'>{cocktail.cocktailDescription}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {!cocktails.length && <p className="cocktailStation__unavailable">Add mixers to create a list of cocktails</p>}
    </div>
  </div>
);

export default HomepageCocktails;