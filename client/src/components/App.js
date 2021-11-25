import 'babel-polyfill';
import React, { useState, useEffect } from 'react';

import Homepage from './Homepage';
import SelectedCocktail from './SelectedCocktail';
import selectedStation from './SelectedStation';

import cocktails from '../utils/cocktails';

const App = () => {
  const [
    bartenderState,
    setBartenderState
  ] = useState({
    stations: [
      {
        id: 0,
        stationName: 'Station 1',
        gpioPinNumber: 4,
        selectedMixer: 'Absolut',
        selectedMixerImage: 'assets/images/mixers/absolut.jpg',
        selectedMixerType: 'Vodka'
      },
      {
        id: 1,
        stationName: 'Station 2',
        gpioPinNumber: 17,
        selectedMixer: 'St. George Spiced Pear',
        selectedMixerImage: 'assets/images/mixers/absolut.jpg',
        selectedMixerType: 'Liqueur'
      },
      {
        id: 2,
        stationName: 'Station 3',
        gpioPinNumber: 27,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerType: null
      },
      {
        id: 3,
        stationName: 'Station 4',
        gpioPinNumber: 22,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerType: null
      },
      {
        id: 4,
        stationName: 'Station 5',
        gpioPinNumber: 10,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerType: null
      },
      {
        id: 5,
        stationName: 'Station 6',
        gpioPinNumber: 9,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerType: null
      },
      {
        id: 6,
        stationName: 'Station 7',
        gpioPinNumber: 11,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerType: null
      },
      {
        id: 7,
        stationName: 'Station 8',
        gpioPinNumber: 5,
        selectedMixer: null,
        selectedMixerImage: null,
        selectedMixerType: null
      }
    ],
    selectedCocktail: null,
    selectedStation: null,
  });

  const setSelectedPage = (pg, data) => setBartenderState(
    state => ({
      ...state,
      selectedPage: pg,
      [pg]: data
    })
  );

  const { stations, selectedStation, selectedCocktail, selectedPage } = bartenderState;

  switch (selectedPage) {
    case 'selectedCocktail':
      return <SelectedCocktail setSelectedPage={setSelectedPage} cocktail={selectedCocktail} />
    case 'homepage':
    default:
      return <Homepage stations={stations} cocktails={cocktails} selectedStation={selectedStation} setSelectedPage={setSelectedPage} />
  }

};

export default App;