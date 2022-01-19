const { spawn } = require('child_process');
const { pin } = require('nodemon/lib/version');

const pins = [
  {
    pinNum: 26,
    amountInOz: 3
  },
  {
    pinNum: 19,
    amountInOz: 1.5
  }];

let timeframe = 0;

const togglePin = (pinNumber, timer) => {
  console.log('himom!', pinNumber, timer)
  const args = ['runRelay.py', pinNumber, timer];
  const gpioFunction = spawn("python3", args);

  let returnOnOff;

  gpioFunction.stdout.on('data', function (data) {
    returnOnOff = data.toString();
  });

  gpioFunction.on('close', (code) => {
    console.log(code);
  });

  return true;
}

for (let i = 0; i < pins.length; i++) {
  const pourInmL = (oz) => (oz * 29.5735) / 20;
  const getSeconds = Number(pourInmL(pins[i].amountInOz));

  timeframe = Math.max(timeframe, getSeconds);

  togglePin(pins[i].pinNum, getSeconds);
  console.log(`Firing Pin ${pins[i].pinNum} for ${getSeconds} seconds`);
}