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
    isCocktailProgressModalDisplayed: false,
    isStationModalDisplayed: false,
    listOfAvailableCocktails: [],
    stations: [
      {
        id: 0,
        stationName: 'Station 1',
        gpioPinNumber: 9,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      },
      {
        id: 1,
        stationName: 'Station 2',
        gpioPinNumber: 10,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      },
      {
        id: 2,
        stationName: 'Station 3',
        gpioPinNumber: 22,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      },
      {
        id: 3,
        stationName: 'Station 4',
        gpioPinNumber: 27,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      },
      {
        id: 4,
        stationName: 'Station 5',
        gpioPinNumber: 17,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      },
      {
        id: 5,
        stationName: 'Station 6',
        gpioPinNumber: 4,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      },
      {
        id: 6,
        stationName: 'Station 7',
        gpioPinNumber: 3,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerCategory: null
      },
      {
        id: 7,
        stationName: 'Station 8',
        gpioPinNumber: 2,
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
        isStationModalDisplayed: true
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
      const { cocktailIngredients } = cocktail;
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
          listOfAvailableCocktails
        })
      );
    });
  };

  const hideModal = (closeModalBool) => setBartenderState(
    state => ({
      ...state,
      selectedStation: null,
      [closeModalBool]: false
    })
  );

  const makeListOfStations = (ingredients) => {
    const { stations } = bartenderState;

    const listOfStations = [];

    ingredients.forEach((ingredient) => {
      const { ingredientAmountInOunces, ingredientName } = ingredient;
      for (let i = 0; i < stations.length; i++) {
        if (stations[i].selectedMixerCategory === ingredientName) {
          const { gpioPinNumber, selectedMixer, stationName } = stations[i];
          listOfStations.push({ gpioPinNumber, ingredientAmountInOunces, selectedMixer, stationName });
        }
      }
    });

    return listOfStations;
  }

  const pourMeADrinkAPI = async (pins) => {
    // Send list of stations to server API
    // Get number of seconds as response, set it to state
    const getPins = { pins };

    await fetch('/makeDrink', {
      method: 'POST',
      body: JSON.stringify(getPins),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        setBartenderState(state => ({
          ...state,
          serverResponse: data.timeframe
        }))
      })
      .catch(err => console.log('uh oh', err))
  }

  const revealCocktailProgressModal = () => {
    setBartenderState(
      state => ({
        ...state,
        isCocktailProgressModalDisplayed: true
      })
    );
  }

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

    const {
      mixerCategory,
      mixerImage,
      mixerName
    } = mixer;

    stations[stationIdNumber] = {
      ...stations[stationIdNumber],
      selectedMixer: mixerName,
      selectedMixerImage: mixerImage,
      selectedMixerCategory: mixerCategory
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
    createListOfAvailableCocktails(mixerName);
  };

  const {
    isCocktailProgressModalDisplayed,
    isStationModalDisplayed,
    listOfAvailableCocktails,
    selectedCocktail,
    selectedMixers,
    selectedPage,
    selectedStation,
    serverResponse,
    stations,
  } = bartenderState;

  switch (selectedPage) {
    case 'selectedCocktail':
      return (
        <SelectedCocktail
          cocktail={selectedCocktail}
          hideModal={hideModal}
          isCocktailProgressModalDisplayed={isCocktailProgressModalDisplayed}
          makeListOfStations={makeListOfStations}
          pourMeADrinkAPI={pourMeADrinkAPI}
          revealCocktailProgressModal={revealCocktailProgressModal}
          serverResponse={serverResponse}
          setSelectedPage={setSelectedPage}
        />
      )
    case 'homepage':
    default:
      return (
        <Homepage
          clickStation={clickStation}
          hideModal={hideModal}
          isStationModalDisplayed={isStationModalDisplayed}
          listOfAvailableCocktails={listOfAvailableCocktails}
          makeListOfStations={makeListOfStations}
          mixerLength={mixers.length}
          pourMeADrinkAPI={pourMeADrinkAPI}
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