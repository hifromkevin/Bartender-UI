import 'babel-polyfill';
import React, { useState, useEffect } from 'react';

const SelectedCocktail = (props) => {
  const {
    cocktail: {
      cocktailName = '',
      cocktailDescription = '',
      cocktailIngredients = '',
      cocktailImage = ''
    }
  } = props;

  return (
    <div className="selectedCocktail">
      <div className="selectedCocktail__display"><img className="selectedCocktail__display__image" src={cocktailImage} /></div>
      <div className="selectedCocktail__content">
        <h2 className="selectedCocktail__content__name">{cocktailName}</h2>
        <div className="selectedCocktail__content__ingredients">{
          cocktailIngredients.map((ingredient, ingredientIndex) => (
            <div
              key={ingredientIndex}
              className="selectedCocktail__content__ingredients__single"
            >
              {`${ingredient.ingredientAmount} ${ingredient.ingredientName}`}
            </div>)
          )
        }</div>
        <div className="selectedCocktail__content__description">{cocktailDescription}</div>
        <div className="selectedCocktail__content__garnish">
          <h2>Garnish</h2>
        </div>
        <div className="selectedCocktail__content__options">
          <button>Bottoms Up</button>
          <a>Go Back</a>
        </div>
      </div>
    </div>
  );
};

export default SelectedCocktail;