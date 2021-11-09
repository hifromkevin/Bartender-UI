const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3005;

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`Listening on port ${port}!`));