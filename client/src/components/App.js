import 'babel-polyfill';
import React, { useState, useEffect } from 'react';
import mixers from '../utils/mixers';

import Homepage from './Homepage';
import SelectedCocktail from './SelectedCocktail';

import cocktails from '../utils/cocktails';

const App = () => {
  const [
    bartenderState,
    setBartenderState
  ] = useState({
    isModalDisplayed: false,
    listOfAvailableCocktails: [],
    stations: [
      {
        id: 0,
        stationName: 'Station 1',
        gpioPinNumber: 4,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      },
      {
        id: 1,
        stationName: 'Station 2',
        gpioPinNumber: 17,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      },
      {
        id: 2,
        stationName: 'Station 3',
        gpioPinNumber: 27,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      },
      {
        id: 3,
        stationName: 'Station 4',
        gpioPinNumber: 22,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      },
      {
        id: 4,
        stationName: 'Station 5',
        gpioPinNumber: 10,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      },
      {
        id: 5,
        stationName: 'Station 6',
        gpioPinNumber: 9,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      },
      {
        id: 6,
        stationName: 'Station 7',
        gpioPinNumber: 11,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      },
      {
        id: 7,
        stationName: 'Station 8',
        gpioPinNumber: 5,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      }
    ],
    selectedCocktail: null,
    selectedMixers: [],
    selectedStation: null,
  });

  const clickStation = (station) => {

    const { selectedMixers } = bartenderState;
    const { selectedMixer } = station;

    if (selectedMixer) {
      for (var i = 0; i < selectedMixers.length; i++) {
        if (selectedMixers[i].mixerName === selectedMixer) {
          selectedMixers.splice(i, 1);
          break;
        }
      }
    }

    setBartenderState(
      state => ({
        ...state,
        selectedStation: station,
        isModalDisplayed: true
      })
    );
  };

  const createListOfAvailableCocktails = (newestMixer) => {
    let { listOfAvailableCocktails, selectedMixers } = bartenderState;

    // zero out list of available cocktails to prevent repeats / a mixer being replaced
    listOfAvailableCocktails = [];

    const sendTrueIfMixerIsNotIncluded = (ingredient) => {
      for (let i = 0; i < selectedMixers.length; i++) {
        if (selectedMixers[i].mixerCategory === ingredient) return false;
      };
      return true;
    };

    // Cycle through all of the available cocktails
    cocktails.forEach(cocktail => {
      const { cocktailName, cocktailIngredients } = cocktail;
      let allIngredientsAvailable = true;

      if (!cocktailIngredients.length) allIngredientsAvailable = false;

      // Loop cocktailIngredients
      for (let i = 0; i < cocktailIngredients.length; i++) {
        const { ingredientName } = cocktailIngredients[i];

        // If an ingredient is NOT on the list of mixers, end cycle and go to the next cocktail. 
        if (sendTrueIfMixerIsNotIncluded(ingredientName) && ingredientName !== newestMixer) {
          allIngredientsAvailable = false;
          break;
        };
      };

      if (allIngredientsAvailable) listOfAvailableCocktails = [...listOfAvailableCocktails, cocktail];

      //If all ingredients are cycled through, and they are all on the list of available mixers, 
      // add it to a list of available cocktails that can be chosen by the user. 
      setBartenderState(
        state => ({
          ...state,
          listOfAvailableCocktails: listOfAvailableCocktails
        })
      );
    });

  };

  const hideModal = () => setBartenderState(
    state => ({
      ...state,
      selectedStation: null,
      isModalDisplayed: false
    })
  );

  const setSelectedPage = (pg, data) => setBartenderState(
    state => ({
      ...state,
      selectedPage: pg,
      [pg]: data
    })
  );

  const updateStation = (mixer, stationIdNumber) => {
    let {
      stations,
      selectedMixers
    } = bartenderState;

    stations[stationIdNumber] = {
      ...stations[stationIdNumber],
      selectedMixer: mixer.mixerName,
      selectedMixerImage: mixer.mixerImage,
      selectedMixerCategory: mixer.mixerCategory
    }

    selectedMixers.push(mixer);

    // add the updated stationss and list of selectedMixers to state
    setBartenderState(
      state => ({
        ...state,
        stations,
        selectedMixers
      })
    );

    // Modal closes
    hideModal();
    createListOfAvailableCocktails(mixer.mixerName);
  };

  const {
    isModalDisplayed,
    listOfAvailableCocktails,
    selectedCocktail,
    selectedMixers,
    selectedPage,
    selectedStation,
    stations,
  } = bartenderState;

  switch (selectedPage) {
    case 'selectedCocktail':
      return <SelectedCocktail setSelectedPage={setSelectedPage} cocktail={selectedCocktail} />
    case 'homepage':
    default:
      return (
        <Homepage
          clickStation={clickStation}
          hideModal={hideModal}
          isModalDisplayed={isModalDisplayed}
          listOfAvailableCocktails={listOfAvailableCocktails}
          mixerLength={mixers.length}
          selectedMixers={selectedMixers}
          selectedStation={selectedStation}
          stations={stations}
          setSelectedPage={setSelectedPage}
          updateStation={updateStation}
        />
      );
  }

};

export default App;