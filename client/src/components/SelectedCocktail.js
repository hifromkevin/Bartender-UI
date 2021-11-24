import 'babel-polyfill';
import React, { useState, useEffect } from 'react';

import Heading from './Heading';

const SelectedCocktail = (props) => {
  const {
    cocktail: {
      cocktailName,
      cocktailDescription,
      cocktailImage,
      cocktailIngredients,
      cocktailSteps
    },
    setSelectedPage
  } = props;

  const styling = {
    'backgroundImage': `url(${cocktailImage})`,
    'backgroundPosition': 'center',
    'backgroundSize': 'cover'
  }

  const fancyNumber = (num, instruction) => {
    if (num < 10) num = `0${num}`;

    return <div className="selectedCocktail__content__step"><span className="selectedCocktail__content__step__number">{num}</span> <span>{instruction}</span></div>
  }

  return (
    <div className="selectedCocktail">
      <div className="selectedCocktail__display" style={styling}></div>
      <div className="selectedCocktail__content">
        <Heading coloring='black' heading={cocktailName} />

        {cocktailIngredients &&
          <div className="selectedCocktail__content__ingredients">
            {cocktailIngredients.map((ingredient, ingredientIndex) => (
              <div key={ingredientIndex}>
                {`${ingredient.ingredientAmount} ${ingredient.ingredientName}`}
              </div>)
            )}
          </div>
        }
        <div className="selectedCocktail__content__description">{cocktailDescription}</div>
        {/* <div className="selectedCocktail__content__garnish">
          <h2>Garnish</h2>
        </div> */}
        {cocktailSteps &&
          <div className="selectedCocktail__content__steps">
            {cocktailSteps.map((step, stepIndex) => (
              fancyNumber(stepIndex + 1, step)
            ))
            }
          </div>
        }
        <div className="selectedCocktail__content__options">
          <span className="selectedCocktail__content__options__bottomsUp">Bottoms Up</span>
          <a onClick={() => setSelectedPage('homepage')}>Go Back</a>
        </div>
      </div>
    </div>
  );
};

export default SelectedCocktail;