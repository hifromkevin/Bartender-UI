const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3005;
const { spawn } = require('child_process');

app.use(bodyParser.json());

app.post('/makeDrink', (req, res) => {
  const { body: { pins } } = req;
  let timeframe = 0;

  // Every oz takes about 10 seconds
  const ozToTime = oz => oz * 10;

  /* 
    Use for troubleshooting if Python file is not found:
  
    const testing = () => {
      const spawning = spawn('ls');
      spawning.stdout.on('data', data => console.log(data.toString()));
      spawning.stderr.on('data', data => console.log(data.toString()));
    }
  
    testing();
    */

  const togglePin = (pinNumber, timer) => {
    const args = ['./server/runRelay.py', pinNumber, timer];
    const gpioFunction = spawn('python3', args);

    gpioFunction.stdout.on('data', data => console.log(data.toString()));
    gpioFunction.stderr.on('data', data => console.log(data.toString()));
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

    const getSeconds = Number(ozToTime(ingredientAmountInOunces));

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