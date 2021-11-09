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
        cocktailImage: 'assets/hella-tasty.jpg'
      },
      {
        cocktailName: 'Fancy Name 2',
        cocktailImage: 'assets/hella-tasty.jpg'
      },
      {
        cocktailName: 'Fancy Name 3',
        cocktailImage: 'assets/hella-tasty.jpg'
      },
      {
        cocktailName: 'Fancy Name 4',
        cocktailImage: 'assets/hella-tasty.jpg'
      },
      {
        cocktailName: 'Fancy Name 5',
        cocktailImage: 'assets/hella-tasty.jpg'
      }
    ]
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
      return <SelectedCocktail />
    case 'selectedMixer':
      return <SelectedMixer />
    case 'homepage':
    default:
      return <Homepage channels={channels} cocktails={cocktails} />
  }

};

export default App;