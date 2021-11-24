import 'babel-polyfill';
import React, { useState, useEffect } from 'react';

import Homepage from './Homepage';
import SelectedCocktail from './SelectedCocktail';
import SelectedMixer from './SelectedMixer';

const App = () => {
  const [
    bartenderState,
    setBartenderState
  ] = useState({
    channels: [
      {
        id: 0,
        channelName: 'Channel 1',
        gpioPinNumber: 4,
        selectedMixer: 'Absolut',
        selectedMixerImage: 'assets/absolut.jpg',
        selectedMixerType: 'Vodka'
      },
      {
        id: 1,
        channelName: 'Channel 2',
        gpioPinNumber: 17,
        selectedMixer: 'St. George Spiced Pear',
        selectedMixerImage: 'assets/absolut.jpg',
        selectedMixerType: 'Liqueur'
      },
      {
        id: 2,
        channelName: 'Channel 3',
        gpioPinNumber: 27,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerType: null
      },
      {
        id: 3,
        channelName: 'Channel 4',
        gpioPinNumber: 22,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerType: null
      },
      {
        id: 4,
        channelName: 'Channel 5',
        gpioPinNumber: 10,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerType: null
      },
      {
        id: 5,
        channelName: 'Channel 6',
        gpioPinNumber: 9,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerType: null
      },
      {
        id: 6,
        channelName: 'Channel 7',
        gpioPinNumber: 11,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerType: null
      },
      {
        id: 7,
        channelName: 'Channel 8',
        gpioPinNumber: 5,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerType: null
      }
    ],
    cocktails: [
      {
        cocktailName: 'Fancy Name',
        cocktailDescription: 'Leverage agile frame works to provide a robust synopsis for high level overviews.',
        cocktailImage: 'assets/hella-tasty.jpg',
        cocktailIngredients: [
          {
            ingredientName: 'Vodka',
            ingredientAmount: '1.5 oz'
          },
          {
            ingredientName: 'Cranberry Juice',
            ingredientAmount: '2 oz'
          },
          {
            ingredientName: 'Other Stuff',
            ingredientAmount: '0.5 oz'
          },
        ]
      },
      {
        cocktailName: 'Fancy Name 2',
        cocktailDescription: 'Longer Text.  Leverage agile frame works to provide a robust synopsis for high level overviews. Leverage agile frame works to provide.',
        cocktailImage: 'assets/chocolatini.jpg'
      },
      {
        cocktailName: 'Fancy Name with More Text',
        cocktailDescription: 'Leverage agile frame works to provide a robust synopsis for high level overviews.',
        cocktailImage: 'assets/hella-tasty.jpg'
      },
      {
        cocktailName: 'Fancy Name 4',
        cocktailDescription: 'Leverage agile frame works to provide a robust synopsis for high level overviews.',
        cocktailImage: 'assets/hella-tasty.jpg'
      },
      {
        cocktailName: 'Fancy Name 5',
        cocktailDescription: 'Leverage agile frame works to provide a robust synopsis for high level overviews.',
        cocktailImage: 'assets/hella-tasty.jpg'
      }
    ],
    selectedPage: 'homepage'
  });

  const setSelectedPage = (pg) => setBartenderState(
    state => ({
      ...state,
      selectedPage: pg
    })
  );

  const { channels, cocktails, selectedPage } = bartenderState;

  switch (selectedPage) {
    case 'selectedCocktail':
      return <SelectedCocktail cocktail={cocktails[0]} />
    case 'selectedMixer':
      return <SelectedMixer />
    case 'homepage':
    default:
      return <Homepage channels={channels} cocktails={cocktails} />
  }

};

export default App;