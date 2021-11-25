import 'babel-polyfill';
import React from 'react';
import Modal from 'react-modal';

import Heading from './Heading';
import MixerDisplay from './MixerDisplay';

import mixers from '../utils/mixers';

const SelectedStationModal = (props) => {
  const {
    hideModal,
    isModalDisplayed,
    mixerLength,
    selectedMixers,
    station,
    updateStation
  } = props;

  return (
    <Modal
      className='selectedStationModal'
      isOpen={isModalDisplayed}
      ariaHideApp={false}
      overlayClassName='selectedStationModal__overlay'
    >
      <Heading coloring='black' heading={station.stationName} />
      <div className="selectedStationModal__listTitle">
        <span>Select a Mixer</span>
        <div className="selectedStationModal__listTitle__underline"></div>
      </div>

      <div className='selectedStationModal__container'>
        <div className='selectedStationModal__list' style={{ width: ((mixerLength - selectedMixers.length) * 215) }}>
          {mixers.map((mixer, index) => (
            <MixerDisplay
              index={index}
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
      <p onClick={hideModal}>Close</p>
    </Modal>
  )

};

export default SelectedStationModal;