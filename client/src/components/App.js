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
        channelName: 'Channel 1',
        gpioPinNumber: 4,
        selectedMixer: 'Absolut',
        selectedMixerImage: 'assets/images/mixers/absolut.jpg',
        selectedMixerType: 'Vodka'
      },
      {
        id: 1,
        channelName: 'Channel 2',
        gpioPinNumber: 17,
        selectedMixer: 'St. George Spiced Pear',
        selectedMixerImage: 'assets/images/mixers/absolut.jpg',
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