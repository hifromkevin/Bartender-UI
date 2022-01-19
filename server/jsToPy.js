const { spawn } = require('child_process');

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

  const args = ['runRelay.py', pinNumber, timer];
  const gpioFunction = spawn('python', args);

  gpioFunction.stdout.on('data', data => console.log(data.toString()));
  gpioFunction.stderr.on('data', data => console.log(data.toString()));

  // gpioFunction.on('close', function (code) {
  //   console.log(code);
  //   return true;
  // });
}

for (let i = 0; i < pins.length; i++) {
  const pourInmL = (oz) => (oz * 29.5735) / 20;
  const getSeconds = Number(pourInmL(pins[i].amountInOz));

  timeframe = Math.max(timeframe, getSeconds);

  togglePin(pins[i].pinNum, getSeconds);
  console.log(`Firing Pin ${pins[i].pinNum} for ${getSeconds} seconds`);
}