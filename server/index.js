const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3005;
const Gpio = require('onoff').Gpio;

app.use(bodyParser.json());

app.post('/makeDrink', (req, res) => {
  // Request is sent in as an object with one key of pins.
  // An array of ingredients needed for the selected cocktail
  // are listed within 'pins'
  const foundPins = req.body.pins;

  // set timeframe to zero
  // eventually to be replaced with 
  // longest time to pour mixer
  // the longest amount = max amount of time 
  // to pour drink and make cocktail
  let timeframe = 0;

  // Amount of oz divided by oz/second
  const pourInmL = (oz) => (oz * 29.5735) / 20;

  // This will eventually stop the GPIO pin from running
  // For now, this is simulated in the console
  const turnOffChannel = (ingredient, pin, fired) => {

    new Gpio(pin, 'out').unexport();
    fired.writeSync(0);
    fired.unexport();

    console.log(`Turning Off Pin ${pin}: `, ingredient);
  };

  // Loop through each station
  // Gather the timeframe required for the longest pour, send to front-end
  // After the given time, turn off the channel
  for (let i = 0; i < foundPins.length; i++) {
    const {
      gpioPinNumber,
      ingredientAmountInOunces,
      selectedMixer,
      stationName
    } = foundPins[i];

    // new Gpio(gpioPinNumber, 'out');

    const firedGpioPin = new Gpio(gpioPinNumber, 'out');

    firedGpioPin.writeSync(1);

    timeframe = Math.max(timeframe, pourInmL(ingredientAmountInOunces));
    console.log(`Firing ${stationName}: `, selectedMixer, pourInmL(ingredientAmountInOunces));
    setTimeout(() => turnOffChannel(selectedMixer, gpioPinNumber, firedGpioPin), pourInmL(ingredientAmountInOunces));
  };

  // Sends the amount of time, to be handled on the front-end by the progress bar
  res.status(200).send({ timeframe });

}, (err, response) => {
  if (!err && response.statusCode == 200) {
    res.send(response.statusCode);
  } else {
    console.error('That ain\'t right...', err);
  }
});

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`Listening on port ${port}!`));