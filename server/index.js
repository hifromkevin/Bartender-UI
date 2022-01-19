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

  // uses onoff
  const turnOffChannel = (pin, ingredient, stationName) => {
    // runningPin.writeSync(0);
    // runningPin.unexport();

    console.log(`Turning Off ${stationName}, Pin ${pin}: `, ingredient);
  };

  const togglePinPy = (pinNumber, onOrOff) => (onOrOff === 'ON')
    ? spawn("python", ["-c", `from piCommands import turnOnPin; turnOnPin(${pinNumber})`])
    : spawn("python", ["-c", `from piCommands import turnOffPin; turnOffPin(${pinNumber})`]);

  const performPinCleanUp = () => spawn(
    "python",
    ["-c", 'from piCommands import cleanUp; cleanUp()']
  );

  const turnOffChannelPy = (pin, ingredient, stationName) => {
    performPinCleanUp();

    console.log(`Turning Off ${stationName}, Pin ${pin}: `, ingredient);
  };

  for (let i = 0; i < pins.length; i++) {
    const {
      gpioPinNumber,
      ingredientAmountInOunces,
      selectedMixer,
      stationName
    } = pins[i];

    const getSeconds = Number(pourInmL(ingredientAmountInOunces)) * 1000;

    // uses onoff
    // const firedGpioPin = new Gpio(gpioPinNumber, 'out');
    // firedGpioPin.writeSync(1);

    timeframe = Math.max(timeframe, getSeconds);

    // Uses onoff
    // But "off" doesn't seem to be working
    // const runPin = new Gpio(gpioPinNumber, 'out');
    // runPin;

    // console.log(`Firing ${stationName}, Pin ${gpioPinNumber}: `, selectedMixer, getSeconds);
    // setTimeout(() => turnOffChannel(runPin, gpioPinNumber, selectedMixer, stationName), getSeconds);


    togglePinPy(gpioPinNumber, 'ON');
    console.log(`Firing ${stationName}, Pin ${gpioPinNumber}: `, selectedMixer, getSeconds);

    setTimeout(() => turnOffChannelPy(gpioPinNumber, selectedMixer, stationName), getSeconds);

    // this uses gpio, also doesn't turn off
    // console.log('himom!!!', pourInmL(ingredientAmountInOunces));
    // const setPin = gpio.export(gpioPinNumber, {
    //   direction: gpio.DIRECTION.OUT,
    //   interval: pourInmL(ingredientAmountInOunces),
    //   ready: () => console.log(`Firing ${stationName}, Pin ${gpioPinNumber}: `, selectedMixer, pourInmL(ingredientAmountInOunces))
    // });

    // setPin.set();

  }
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