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
                  src={channel.selectedMixerImage || 'assets/bottle.jpg'}
                />
                <div className="mixer__tag">
                  <span className="mixer__tag__type">{channel.selectedMixerType || 'No Selection'}</span>
                  <span className="mixer__tag__brand">{channel.selectedMixer || 'Select Mixer'}</span>
                </div>
              </div>
              <span className="station__name">{channel.channelName}</span>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="cocktailStation">
        <h1 className="homepage__heading">Available Cocktails</h1>
        <div className="cocktailStation__container">
          <div className="cocktailStation__list" style={{ width: (cocktails.length * 220) }}>
            {cocktails.map((cocktail, cocktailIndex) => (
              <div
                className="cocktail2"
                key={cocktailIndex}
              >
                <img
                  className="cocktail2__image"
                  src={cocktail.cocktailImage}
                />
                <div className="cocktail2__tag">
                  <span className="cocktail2__tag__name">{cocktail.cocktailName}</span>
                  <span className="cocktail2__tag__description">{cocktail.cocktailDescription}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="cocktailStation">
        <h1 className="homepage__heading">Available Cocktails</h1>
        <div className="cocktailStation__container">
          <div className="cocktailStation__list" style={{ width: (cocktails.length * 510) }}>
            {cocktails.map((cocktail, cocktailIndex) => (
              <div
                className="cocktail"
                key={cocktailIndex}
              >
                <div className="cocktail__container">
                  <div className="cocktail__container__image">
                    <img src={cocktail.cocktailImage} />
                  </div>
                  <div className="cocktail__container__tag">
                    <span className="cocktail__container__tag__name">{cocktail.cocktailName}</span>
                    <hr className="cocktail__container__tag__separator" />
                    <span className="cocktail__container__tag__description">{cocktail.cocktailDescription}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Homepage;