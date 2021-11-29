import 'babel-polyfill';
import React from 'react';
import Modal from 'react-modal';

import Heading from './Heading';
import MixerDisplay from './MixerDisplay';

import mixers from '../utils/mixers';

const SelectedStationModal = (props) => {
  const {
    hideModal,
    isStationModalDisplayed,
    mixerLength,
    selectedMixers,
    station,
    updateStation
  } = props;

  return (
    <Modal
      className='modalDisplay'
      closeTimeoutMS={1000}
      isOpen={isStationModalDisplayed}
      ariaHideApp={false}
      overlayClassName='modalDisplay__overlay'
    >
      <span
        className='modalDisplay__close'
        onClick={() => hideModal('isCocktailProgressModalDisplayed')}
      >X</span>
      <div className='modalDisplay__heading'>
        <Heading coloring='black' heading={station.stationName} />
      </div>
      <div className='modalDisplay__listTitle'>
        <span>Select a Mixer</span>
        <div className='modalDisplay__listTitle__underline'></div>
      </div>

      <div className='modalDisplay__container'>
        <div className='modalDisplay__mixerList' style={{ width: ((mixerLength - selectedMixers.length) * 215) }}>
          {mixers.map((mixer, index) => (
            <MixerDisplay
              key={index}
              mixer={mixer}
              selectedMixers={selectedMixers}
              station={station}
              updateStation={updateStation}
            />
          ))}
        </div>
      </div>
      <br />
      <hr />
    </Modal>
  )

};

export default SelectedStationModal;