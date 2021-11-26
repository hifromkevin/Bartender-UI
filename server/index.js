const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3005;

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

  const pourInmL = (oz) => (oz * 29.5735)

}, (err, response) => {
  if (!err && response.statusCode == 200) {
    res.send(response.statusCode);
  } else {
    console.error('That ain\'t right...', err);
  }
});

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`Listening on port ${port}!`));