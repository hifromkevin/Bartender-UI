import 'babel-polyfill';
import React, { useState } from 'react';

const ProgressBar = (props) => {
  const [
    progressBarState,
    setProgressBarState
  ] = useState({});

  const { time } = props;

  setTimeout(() => {
    setProgressBarState({
      'width': `100%`,
      'transitionDuration': `${time}s`
    })
  }, 0);

  return (
    <div className='progressBar'>
      <span style={progressBarState} className='progressBar__loading'></span>
    </div >
  )
};

export default ProgressBar;