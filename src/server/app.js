const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Welcome!');
})

app.listen(8080, () => {console.log('listening on port 8080');});
