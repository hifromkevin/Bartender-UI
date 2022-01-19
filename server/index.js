const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3005;
const { Gpio } = require('onoff');

const { spawn } = require('child_process');

const gpio = require('gpio');

app.use(bodyParser.json());

app.post('/makeDrink', (req, res) => {
  const { body: { pins } } = req;
  let timeframe = 0;

  // Amount of oz divided by oz/second
  const pourInmL = (oz) => (oz * 29.5735) / 20;

  const togglePinPy = (pinNumber, onOrOff) => {
    const gpioFunction = (onOrOff === 'ON')
      ? spawn("python", ["-c", `from piCommands import turnOnPin; turnOnPin('${pinNumber}')`])
      : spawn("python", ["-c", `from piCommands import turnOffPin; turnOffPin('${pinNumber}')`]);

    gpioFunction.stdout.on('data', function (data) {
      returnOnOff = data.toString();
    });

    gpioFunction.on('close', (code) => {
      console.log(returnOnOff)
    });

    return true;
  }

  const performPinCleanUp = () => spawn(
    "python",
    ["-c", 'from piCommands import *; cleanUp()']
  );

  const turnOffChannelPy = (pin, ingredient, stationName) => {
    togglePinPy(pin, 'OFF');
    console.log(`Turning Off ${stationName}, Pin ${pin}: `, ingredient);
  };

  for (let i = 0; i < pins.length; i++) {
    const {
      gpioPinNumber,
      ingredientAmountInOunces,
      selectedMixer,
      stationName
    } = pins[i];

    const getSeconds = Number(pourInmL(ingredientAmountInOunces));

    timeframe = Math.max(timeframe, getSeconds);

    togglePinPy(gpioPinNumber, 'ON');
    console.log(`Firing ${stationName}, Pin ${gpioPinNumber}: `, selectedMixer, getSeconds);

    setTimeout(() => turnOffChannelPy(gpioPinNumber, selectedMixer, stationName), getSeconds);
  }
  // Sends the amount of time, to be handled on the front-end by the progress bar
  res.status(200).send({ timeframe });
  // performPinCleanUp();
}, (err, response) => {
  if (!err && response.statusCode == 200) {
    res.send(response.statusCode);
  } else {
    console.error('That ain\'t right...', err);
  }
});

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`Listening on port ${port}!`));