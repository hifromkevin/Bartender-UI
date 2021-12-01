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
      <span
        className='modalDisplay__close'
        onClick={() => hideModal('isCocktailProgressModalDisplayed')}
      >X</span>
      <div className='modalDisplay__heading'>
        <Heading coloring='black' heading='Cheers!' />
      </div>
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
    </Modal >
  )

};

export default CocktailProgressModal;