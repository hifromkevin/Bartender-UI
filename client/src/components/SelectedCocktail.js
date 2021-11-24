import 'babel-polyfill';
import React, { useState, useEffect } from 'react';

import Heading from './Heading';

const SelectedCocktail = (props) => {
  const {
    cocktail: {
      cocktailName,
      cocktailDescription,
      cocktailGarnishes,
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
        <div className="box"></div>
        <Heading coloring='black' heading={cocktailName} />

        {cocktailIngredients &&
          <div className="selectedCocktail__content__ingredients">
            {cocktailIngredients.map((ingredient, ingredientIndex) => (
              <div className="selectedCocktail__content__ingredients__single" key={ingredientIndex}>
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
          <div className="selectedCocktail__content__section">
            <div className="selectedCocktail__content__section__title">Instructions</div>
            <div className="selectedCocktail__content__section__underline"></div>
            <div className="selectedCocktail__content__steps">
              {cocktailSteps.map((step, stepIndex) => (
                fancyNumber(stepIndex + 1, step)
              ))
              }
            </div>
          </div>
        }

        {cocktailGarnishes &&
          <div className="selectedCocktail__content__section">
            <div className="selectedCocktail__content__section__title">What You'll Need</div>
            <div className="selectedCocktail__content__section__underline"></div>
            <div className="selectedCocktail__content__garnish">
              {cocktailGarnishes.map((garnish, i) => (
                <div className="selectedCocktail__content__garnish__item">
                  <img className="selectedCocktail__content__garnish__icon" src={garnish.garnishImage} />
                  <p className="selectedCocktail__content__garnish__name">{garnish.garnishName}</p>
                </div>
              ))}
            </div>
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