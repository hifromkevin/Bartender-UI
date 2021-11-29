import 'babel-polyfill';
import React, { useEffect, useState } from 'react';

const ProgressBar = (props) => {
  const [
    progressBarState,
    setProgressBarState
  ] = useState({});

  const { time } = props;

  const buildProgressBar = () => setTimeout(() => {
    setProgressBarState({
      'width': `100%`,
      'transitionDuration': `${time}s`
    })
  }, 0);

  useEffect(() => {
    buildProgressBar();
    return () => {
      setProgressBarState({});
    };
  }, []);

  if (time) {
    return (
      <div className='progressBar'>
        <span style={progressBarState} className='progressBar__loading'></span>
      </div >
    )
  } else {
    buildProgressBar();
  }
};

export default ProgressBar;