import 'babel-polyfill';
import React, { useState, useEffect } from 'react';

import Heading from './Heading';
import CocktailProgressModal from './CocktailProgressModal';

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
    hideModal,
    isCocktailProgressModalDisplayed,
    makeListOfStations,
    pourMeADrinkAPI,
    revealCocktailProgressModal,
    serverResponse,
    setSelectedPage
  } = props;

  const styling = {
    'backgroundImage': `url(${cocktailImage})`,
    'backgroundPosition': 'center',
    'backgroundSize': 'cover'
  }

  const fancyNumber = (num, instruction, key) => (
    <div className="selectedCocktail__content__step" key={key}>
      <span
        className="selectedCocktail__content__step__number"
      >{(num < 10) ? `0${num}` : num}</span> <span>{instruction}</span>
    </div>
  );

  return (
    <>
      <div className="selectedCocktail">
        <div className="selectedCocktail__display" style={styling}></div>
        <div className="selectedCocktail__content">
          <div className="box"></div>
          <Heading coloring='black' heading={cocktailName} />

          {cocktailIngredients &&
            <div className="selectedCocktail__content__ingredients">
              {cocktailIngredients.map((ingredient, ingredientIndex) => (
                <div className="selectedCocktail__content__ingredients__single" key={ingredientIndex}>
                  {`${ingredient.ingredientAmountInOunces}oz ${ingredient.ingredientName}`}
                </div>)
              )}
            </div>
          }
          <div className="selectedCocktail__content__description">{cocktailDescription}</div>
          {cocktailSteps &&
            <div className="selectedCocktail__content__section">
              <div className="selectedCocktail__content__section__title">Instructions</div>
              <div className="selectedCocktail__content__section__underline"></div>
              <div className="selectedCocktail__content__steps">
                {cocktailSteps.map((step, stepIndex) => (
                  fancyNumber(stepIndex + 1, step, stepIndex)
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
                {cocktailGarnishes.map((garnish, garnishIndex) => (
                  <div className="selectedCocktail__content__garnish__item" key={garnishIndex}>
                    <img className="selectedCocktail__content__garnish__icon" src={garnish.garnishImage} />
                    <p className="selectedCocktail__content__garnish__name">{garnish.garnishName}</p>
                  </div>
                ))}
              </div>
            </div>
          }

          <div className="selectedCocktail__content__options">
            <span
              className="selectedCocktail__content__options__bottomsUp"
              onClick={() => {
                pourMeADrinkAPI(makeListOfStations(cocktailIngredients));
                revealCocktailProgressModal();
              }}>Bottoms Up</span>
            <a onClick={() => setSelectedPage('homepage')}>Go Back</a>
          </div>
        </div>
      </div>

      <CocktailProgressModal
        cocktailName={cocktailName}
        hideModal={hideModal}
        isCocktailProgressModalDisplayed={isCocktailProgressModalDisplayed}
        serverResponse={serverResponse}
      />
    </>
  );
};

export default SelectedCocktail;