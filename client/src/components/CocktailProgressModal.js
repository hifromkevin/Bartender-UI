import 'babel-polyfill';
import React from 'react';
import Modal from 'react-modal';

import Heading from './Heading';
import ProgressBar from './ProgressBar';

import mixers from '../utils/mixers';

const CocktailProgressModal = (props) => {
  const {
    cocktailName,
    hideModal,
    isCocktailProgressModalDisplayed,
    serverResponse
  } = props;

  return (
    <Modal
      className='modalDisplay'
      isOpen={isCocktailProgressModalDisplayed}
      ariaHideApp={false}
      overlayClassName='modalDisplay__overlay'
    >
      <Heading coloring='black' heading='Bottoms Up!' />
      <div className='modalDisplay__listTitle'>
        <span>{`Pouring Your ${cocktailName}`}</span>
        <div className='modalDisplay__listTitle__underline'></div>
      </div>

      <div className='modalDisplay__container'>
        <div
          className='modalDisplay__list'
        >
          <ProgressBar time={serverResponse} />
        </div>
      </div>
      <br />
      <hr />
      <p onClick={() => hideModal('isCocktailProgressModalDisplayed')}>Close</p>
    </Modal>
  )

};

export default CocktailProgressModal;