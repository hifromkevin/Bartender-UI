import 'babel-polyfill';
import React, { useState, useEffect } from 'react';
import mixers from '../utils/mixers';

import Homepage from './Homepage';
import SelectedCocktail from './SelectedCocktail';

const App = () => {
  const [
    bartenderState,
    setBartenderState
  ] = useState({
    isModalDisplayed: false,
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

  const setSelectedPage = (pg, data) => setBartenderState(
    state => ({
      ...state,
      selectedPage: pg,
      [pg]: data
    })
  );

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

  const hideModal = () => setBartenderState(
    state => ({
      ...state,
      selectedStation: null,
      isModalDisplayed: false
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
    // createListOfCocktails(CommonUtils.camelizeWords(mixerName));
  };

  const { isModalDisplayed, stations, selectedCocktail, selectedMixers, selectedPage, selectedStation } = bartenderState;

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