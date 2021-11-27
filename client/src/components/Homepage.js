import 'babel-polyfill';
import React from 'react';

import HomepageCocktails from './HomepageCocktails';
import HomepageMixerStations from './HomepageMixerStations';
import SelectedStationModal from './SelectedStationModal';

import cocktails from '../utils/cocktails';

const Homepage = (props) => {
  const {
    clickStation,
    hideModal,
    isStationModalDisplayed,
    listOfAvailableCocktails,
    mixerLength,
    selectedMixers,
    selectedStation,
    stations,
    setSelectedPage,
    updateStation
  } = props;

  return (
    <div className='homepage'>
      <h1 className='homepage__logo'>Bartender</h1>
      <HomepageMixerStations
        clickStation={clickStation}
        selectedMixers={selectedMixers}
        stations={stations}
      />
      <HomepageCocktails
        cocktails={listOfAvailableCocktails}
        setSelectedPage={setSelectedPage}
      />
      {
        selectedStation &&
        <SelectedStationModal
          hideModal={hideModal}
          isStationModalDisplayed={isStationModalDisplayed}
          mixerLength={mixerLength}
          selectedMixers={selectedMixers}
          station={selectedStation}
          updateStation={updateStation}
        />
      }
    </div>
  );
};

export default Homepage;