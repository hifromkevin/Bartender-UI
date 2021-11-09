import 'babel-polyfill';
import React, { useState, useEffect } from 'react';

const Homepage = (props) => {
  const { channels, cocktails } = props;
  return (
    <div className="homepage">
      <h1 className="homepage__logo">Bartender</h1>
      <div className="station">
        <h1 className="homepage__heading">Mixer Stations</h1>
        <div className="station__list">
          {channels.map((channel, channelIndex) => (
            <div
              className="mixerContainer"
              key={channelIndex}
            >
              <div className="mixer">
                <img
                  className="mixer__image"
                  src={channel.selectedMixerImage}
                />
                {(channel.selectedMixerType || channel.selectedMixer) && <div className="mixer__tag">
                  <span className="mixer__tag__type">{channel.selectedMixerType}</span>
                  <span className="mixer__tag__brand">{channel.selectedMixer}</span>
                </div>}
              </div>
              <p>{channel.channelName}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cocktailStation">
        <h1 className="homepage__heading">Available Cocktails</h1>
        <div className="cocktailStation__container">
          <div className="cocktailStation__list" style={{ width: (cocktails.length * 350) }}>
            {cocktails.map((cocktail, cocktailIndex) => (
              <div
                className="cocktail"
                key={cocktailIndex}
              >
                <img
                  className="cocktail__image"
                  src={cocktail.cocktailImage}
                />
                <div className="cocktail__tag">
                  <span className="cocktail__tag__name">{cocktail.cocktailName}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;