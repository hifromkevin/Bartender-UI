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

  const togglePin = (pinNumber, timer) => {
    const args = ['runRelay.py', pinNumber, timer];
    const gpioFunction = spawn("python3", args);

    let returnOnOff;

    gpioFunction.stdout.on('data', function (data) {
      returnOnOff = data.toString();
    });

    gpioFunction.on('close', (code) => {
      return true;
    });
  }

  const performPinCleanUp = () => spawn(
    "python",
    ["-c", 'from piCommands import *; cleanUp()']
  );

  for (let i = 0; i < pins.length; i++) {
    const {
      gpioPinNumber,
      ingredientAmountInOunces,
      selectedMixer,
      stationName
    } = pins[i];

    const getSeconds = Number(pourInmL(ingredientAmountInOunces));

    timeframe = Math.max(timeframe, getSeconds);

    togglePin(gpioPinNumber, getSeconds);
    console.log(`Firing Pin ${gpioPinNumber} for ${getSeconds} seconds`);
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