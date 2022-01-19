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

const togglePinPy = (pinNumber, timer) => {
  // const gpioFunction = spawn("python", ["-c", `from pythonFile import activatePin; activatePin('${pinNumber}', '${timer}')`]);
  // const gpioFunction = spawn("python", ["-c", ["pythonFile.py", "`${pinNumber}`", "`${timer}`"]]);
  const gpioFunction = spawn("python", `cmdPythonFile.py ${pinNumber} ${timer}`)

  let returnOnOff;

  gpioFunction.stdout.on('data', function (data) {
    returnOnOff = data.toString();
  });

  gpioFunction.on('close', (code) => {
    console.log(`${returnOnOff} - ${code}`)
  });

  return true;
}

for (let i = 0; i < pins.length; i++) {
  const pourInmL = (oz) => (oz * 29.5735) / 20;
  const getSeconds = Number(pourInmL(pins[i].amountInOz));

  timeframe = Math.max(timeframe, getSeconds);

  togglePinPy(pins[i].pinNum, getSeconds);
  console.log(`Firing Pin ${pins[i].pinNum}`);
}