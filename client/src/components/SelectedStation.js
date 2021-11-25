import 'babel-polyfill';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const SelectedStation = (props) => {
  const {
    station: { stationName },
    hideModal,
    isModalDisplayed,
    mixers
  } = props;

  return (
    <Modal
      className='mixerListModal'
      isOpen={isModalDisplayed}
      ariaHideApp={false}
      overlayClassName='mixerListModal__overlay'
    >
      <h1>Select a Mixer</h1>
      {mixers.map((mixer, index) => (
        <MixerName
          key={index}
          mixerName={mixer.mixerName}
          selectedStation={selectedStation}
          selectedMixers={selectedMixers}
          updateStation={updateStation}
        />
      ))}
      <br />
      <hr />
      <p onClick={hideModal}>Close</p>
    </Modal>
  )

};

export default SelectedStation;