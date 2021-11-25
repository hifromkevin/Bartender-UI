import 'babel-polyfill';
import React from 'react';

import Heading from './Heading';
import HomepageCocktails from './HomepageCocktails';
import HomepageMixerStations from './HomepageMixerStations';

const Homepage = (props) => {
  const { stations, cocktails, setSelectedPage } = props;

  return (
    <div className='homepage'>
      <h1 className='homepage__logo'>Bartender</h1>
      <HomepageMixerStations stations={stations} />
      <HomepageCocktails cocktails={cocktails} setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default Homepage;