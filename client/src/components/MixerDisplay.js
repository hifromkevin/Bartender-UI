import 'babel-polyfill';
import React from 'react';

const MixerDisplay = (props) => {

  const {
    mixer,
    selectedMixers,
    station,
    updateStation
  } = props;

  // If the mixer has already been used, we do not want it to appear
  for (let i = 0; i < selectedMixers.length; i++) {
    if (selectedMixers[i].mixerName === mixer.mixerName) return null;
  }

  return (
    <div
      className='selectedStationModal__mixer'
      onClick={() => updateStation(mixer, station.id)}
    >
      <div
        className='selectedStationModal__image'
        style={{
          'backgroundImage': mixer.mixerImage ? `url(${mixer.mixerImage})` : `url('assets/images/mixers/bottle.jpg')`,
        }}
      ></div>
      <div className='selectedStationModal__tag'>
        <span className='selectedStationModal__tag__type'>{mixer.mixerCategory || 'No Selection'}</span>
        <span className='selectedStationModal__tag__brand'>{mixer.mixerName || 'Select Mixer'}</span>
      </div>
    </div>
  )
};

export default MixerDisplay;