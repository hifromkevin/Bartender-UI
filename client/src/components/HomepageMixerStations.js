import 'babel-polyfill';
import React from 'react';

import Heading from './Heading';

const HomepageMixerStations = ({ clickStation, selectedMixers, stations }) => (
  <div className='station'>
    <Heading coloring='white' heading='Mixer Stations' />
    <div className='station__list'>
      {stations.map((station, stationIndex) => (
        <div
          className='mixerContainer'
          key={stationIndex}
          onClick={() => clickStation(station)}
        >
          <span className='station__name'>{station.stationName}</span>

          <div className='mixer'>
            <img
              className='mixer__image'
              src={station.selectedMixerImage || 'assets/images/mixers/bottle.jpg'}
            />
            <div className='mixer__tag'>
              <span className='mixer__tag__type'>{station.selectedMixerCategory || 'No Selection'}</span>
              <span className='mixer__tag__brand'>{station.selectedMixer || 'Select Mixer'}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HomepageMixerStations;