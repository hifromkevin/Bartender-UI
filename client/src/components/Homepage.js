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
    isModalDisplayed,
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
      <HomepageMixerStations clickStation={clickStation} selectedMixers={selectedMixers} stations={stations} />
      <HomepageCocktails cocktails={cocktails} setSelectedPage={setSelectedPage} />
      {selectedStation
        && <SelectedStationModal
          hideModal={hideModal}
          isModalDisplayed={isModalDisplayed}
          mixerLength={mixerLength}
          selectedMixers={selectedMixers}
          station={selectedStation}
          updateStation={updateStation}
        />}
    </div>
  );
};

export default Homepage;